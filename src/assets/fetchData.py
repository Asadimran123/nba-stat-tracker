import requests
import json

url_stats = "https://api-nba-v1.p.rapidapi.com/standings"
url_teams = "https://api-nba-v1.p.rapidapi.com/teams"
url_players = "https://api-nba-v1.p.rapidapi.com/players/statistics"


headers = {
	"X-RapidAPI-Key": "42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a",
	"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
}

querystring_team = {"league":"standard","season":"2018"}
querystring_players = {"id":"265","season":"2021"}


# response = requests.get(url_stats, headers=headers, params=querystring)
response = requests.get(url_players, headers=headers, params=querystring_players)


data = response.json()

total_points = 0
for game in data['response']: 
    if game.get("points") != None:
        total_points+= int(game.get("points"))
    else: 
        print('count not tally')
    
print('total points: ', total_points)

print('games played: ', len(data['response']))

print('ppg: ', (total_points/len(data['response'])))

with open("player-data.js", 'w') as f: 
    json.dump(data['response'], f, indent=4)





    