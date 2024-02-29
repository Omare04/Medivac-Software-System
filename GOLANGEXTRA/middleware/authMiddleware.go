package middleware

import (
	"fmt"
	"os"
	"github.com/joho/godotenv"
)

func TestMiddle() {

	err := godotenv.Load("../config/.env")
	if err != nil {
		fmt.Println("Error Loading ENV variables")
	}

	fmt.Print(os.Getenv("DB_USER"))
	fmt.Printf("Middle")
}
