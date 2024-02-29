import requests
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

#TMH
ICAOTMH = "020182"
ICAOTMV = "02019A"

# Retrieve the value of the environment variable
APIKEY = os.getenv('ADSB_API_KEY')

url = f"https://adsbexchange-com1.p.rapidapi.com/v2/hex/{ICAOTMV}/"

headers = {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "adsbexchange-com1.p.rapidapi.com"
}

response = requests.get(url, headers=headers)

print(response.json())
