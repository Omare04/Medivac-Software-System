package main

import (
	"fmt"
	"github.com/Omare04/medApp.git/stock-management-services/middlewarte"
	// "github.com/gofiber/fiber/v2"
)

func main() {
	// app := fiber.New()

	// app.Get("/", func(c *fiber.Ctx) error {
	// 	return c.SendString("Hello, World!")
	// })

	// app.Listen(":3000")
	fmt.Printf("HI winner")
	middleware.TestMiddleware()
}
