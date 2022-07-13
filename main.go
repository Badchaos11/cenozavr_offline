package main

import (
	"fmt"

	"github.com/antchfx/htmlquery"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Product struct {
	Id      int16 `gorm:"primary_key"`
	Name    string
	Url     string
	Url_img string
	Price   string
}

func main() {
	// urlo := "https://www.ozon.ru/category/moloko-9283/"
	dsn := "badchaos:pe0038900@tcp(127.0.0.1:3306)/cenozavr?charset=utf8&parseTime=True&loc=Local"

	doc, err := htmlquery.LoadDoc("ozon_index.html")
	if err != nil {
		panic(err)
	}

	list, err := htmlquery.QueryAll(doc, "//div[@class='jw2']/div/div/div/div")
	if err != nil {
		panic(err)
	}

	result := []Product{}

	check_table(dsn)

	for i, n := range list {

		if i == 31 {
			break
		}

		to_url := htmlquery.FindOne(n, "//a")
		image_url := htmlquery.FindOne(n, "/a/div/div/img")
		name := htmlquery.FindOne(n, "/div/a/span/span")
		price := htmlquery.FindOne(n, "/div/div/div")
		price_2 := htmlquery.FindOne(n, "/div/div/span")

		row_data := Product{Name: htmlquery.InnerText(name), Price: htmlquery.InnerText(price),
			Url: htmlquery.SelectAttr(to_url, "href"), Url_img: htmlquery.SelectAttr(image_url, "srcset")}

		if len(row_data.Price) == 2 {
			row_data.Price = htmlquery.InnerText(price_2)
		}
		insert(dsn, row_data)
		result = append(result, row_data)
	}

}

func insert(dsn string, data Product) {

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db.Select("name", "url", "url_img", "price").Create(&data)
	fmt.Println("Row has been created")

}

func check_table(dsn string) {
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	if db.Migrator().HasTable(&Product{}) {
		fmt.Println("Table already exists in database")
	} else {
		fmt.Println("Creating new table")
		db.AutoMigrate(&Product{})
	}
}
