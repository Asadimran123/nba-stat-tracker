import requests
import json

url_stats = "https://api-nba-v1.p.rapidapi.com/standings"
url_teams = "https://api-nba-v1.p.rapidapi.com/teams"


headers = {
	"X-RapidAPI-Key": "42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a",
	"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
}

querystring = {"league":"standard","season":"2000"}


response = requests.get(url_stats, headers=headers, params=querystring)

data = response.json()

print(len(data['response']))

with open("data.js", 'w') as f: 
    json.dump(data['response'], f, indent=4)





    