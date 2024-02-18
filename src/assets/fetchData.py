import requests
import json

url_stats = "https://api-nba-v1.p.rapidapi.com/standings"
url_teams = "https://api-nba-v1.p.rapidapi.com/teams"


headers = {
	"X-RapidAPI-Key": "42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a",
	"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
}

querystring = {"league":"standard","season":"2021"}


response = requests.get(url_stats, headers=headers, params=querystring)

data = response.json()

print(len(data['response']))

with open("data.js", 'w') as f: 
    json.dump(data['response'], f, indent=4)


# try:
#     response_team = requests.get(url_teams, headers=headers)
#     data_team = response_team.json()

#     teams = []
#     for team in data_team['response']:
#         if team['nbaFranchise']:
#             teams.append((team['name'], team['id']))
#     teams.pop(27)
#     print(teams)

#     standings = {}
#     for team in teams: 
#         querystring_stats = {"league": "standard", "season": "2022", "team": team[1]}
#         response = requests.get(url_stats, headers=headers, params=querystring_stats)
#         data_team_stats = response.json()

#         if 'response' in data_team_stats:
#             print(f"found data for {team[0]}")
#             standings[team[1]] = data_team_stats['response'][0].get('division', {})
        
#         else:
#             print(f"No data found for team: {team[0]}")

#     with open("team_standings.js", "w") as f:
#         f.write('const data = ')
#         json.dump(standings, f, indent=4)
        
#     print("Team standings data written to team_standings.js successfully")

# except Exception as e: 
#     print("An error occurred:", e)




    