# NBA stat tracker built using ReactJS and TS
v1.0.1
https://main.d1hruumu2t3gnf.amplifyapp.com 
Server repo: https://github.com/Asadimran123/nba-stat-server

## future plans, updates, bug fixes.
- center headers for pages
- figure out how to get rid of "no data available" on first query
- card hearts on safari are not in the correct spot

- fav teams have no filter right now. need to add in filter by season
- Favorite Players
- Favorite Team Filters
- Live Game Scores
- Detailed team data

## infrastructure/overall logic
- these .tsx files contain the react components for the frontend
- data is fetched various from api gateway endpoints set up on aws
- once an endpoint is hit, aws lambda function is executed and fetched from rapidAPI
- https://rapidapi.com/api-sports/api/api-nba/
- https://rapidapi.com/frontalinilucas/api/nba-results-pro/


## Dependancies
- "@uidotdev/usehooks": "^2.4.1",
- "autoprefixer": "^10.4.18",
- "axios": "^1.6.8",
- "flowbite-react": "^0.7.2",
- "localforage": "^1.10.0",
- "lodash.template": "^4.5.0",
- "match-sorter": "^6.3.4",
- "nanoid": "^5.0.6",
- "postcss": "^8.4.35",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-icons": "^5.0.1",
- "react-router-dom": "^6.22.2",
- "sort-by": "^0.0.2",
- "tailwindcss": "^3.4.1",
- "use-debounce": "^10.0.0"

## component docs

### main.tsx
Hosts app component

### App.tsx
contains top level logic, state, and routing
#### State variables 
**teams**: array that contains list of teams. data filled with fetch from /teams endpoint from server
**favoriteTeams**: array that contains list of users favorited teams, used **localStorage**
**season**: number type. stores current season
**isEast/isWest**: bools that save what conference user is viewing
**seasonList**: array that has list of seasons
#### logic
- first useEffect fetches team data from server, manipulates data, gives new id to teams
- second useEffect sets local storage
- third useEffect handles favoriting a team on initial load
#### functions
- toggleFav: handles fav team toggling
- toggleSeason: toggles season
- toggleConference: toggles conference view

### Home.tsx
#### State variables 
**news**: array that contains json fetched from news endpoint
#### logic
- useEffect calls fetchnews
#### functions
- fetchNews: fetches news. standard axios fetch

### Teams.tsx
#### State variables 
- no state because all data is stored in App component and passed down as props
#### logic
- teamCards are passed down from App.tsx 
- filtered by conference and sorted by team conference standing

### MyTeams.tsx
#### State variables 
- no state because all data is passed down by props from App.tsx
#### logic
- team cards are filtered and rendered then sorted 

### Players.tsx
#### State variables 
- playerSearchResults: array that contains list of players when user queries a player
- playerID: number type that stores 
- playerData: stores individual player data
- statType: stores user view of data. either "averages" or "totals"
#### logic
- useEffect fetches player data. 
#### functions
- fetchPlayerData: fetches player data. standard axios fetch to endpoint
- handleStatChange: sets which stat type is viewed

### About.tsx
- general info 


### Contact.tsx
- contains form componrnt

### Players.tsx
#### logic
- creates card components with team data passed down as props from Teams.tsx

### MyForm.tsx
#### State variables 
- name: user's name 
- email: user's email 
- message: message to be sent 
- error: not used
#### logic
- user data is saved on every keystroke and on submit a post request is sent to formcarry api
#### functions
- onSubmit: sends post request of user data to formcarry api

### NavBar.tsx
contains links to other pages for routing
#### State variables 
- showMenu: bool that determines if nav is showing on mobile view.
#### logic
- useEffect fetches player data. 
#### functions
- toggleMenu: shows or hodes menu. 

### PlayerDataResults.tsx
renders player data passed in as props from players.tsx
#### State variables 
- currentPlayerData: array that contains json data fetched in players.tsx
#### functions
- renderPlayerData: depending on user's choice, map over currentPlayer data and render data into table


### SearchBar.tsx
input for player searching
#### State variables 
- player: current player queried. updated on every keystroke
- debouncedPlayer: queries most recent query based on 500ms debounce
#### logic
- user queries and on every keystroke up to the most recent 500ms, state is updated and get request is sent to endpoint
#### functions
- handleChange: handles user input changees.


### SearchResults.tsx
#### logic
- receives search results from query from parent as props and renders them

