import './App.css'
import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react';
import  {Route, Routes} from "react-router-dom"
import Home from './assets/pages/Home';
import TeamsPage from './assets/pages/Teams';
import MyTeamsPage from './assets/pages/MyTeams';

export default function App() {
  const [teams, setTeams] = useState<any[]>([])
  const [favoriteTeams, setFavoriteTeams] = useState<any[]>(()=>{
      const data = localStorage.getItem('favTeams')
      return data ? JSON.parse(data) : [] 
      }
  )

  const [season, setSeason] = useState(2023)

  console.log(season)
  const [isEast, setIsEast] = useState(true)
  const [isWest, setIsWest] = useState(false)

  const seasonList = ()=> {
    const seasons = []
    for(let i = new Date().getFullYear() - 1; i > 2017; i--){
        seasons.push(i)
    }
    return seasons
    }
  /** effect to get nbaFranchises and set state only once at start of app.  */
  useEffect(() => {
    fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${season}`, {
        "method": "GET",
        "headers": {
        'X-RapidAPI-Key': '42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    })
    .then(res => res.json())
    .then(data => {
        const updatedTeams = data.response.map((team: any) => {
        const new_id = `${team.team.id}-${team.season}`
        delete team.team.id
        return {
            ...team,
            id: new_id,
            isFavorite: favoriteTeams.find(team => team.id === new_id) ? true : false
        };
        });
        setTeams(updatedTeams);
  })
    .catch(err => window.alert("Could not load data. Refresh and try again"));
  }, [season]);

  /** effect to manage local storage */
  useEffect(()=>{
    localStorage.setItem('favTeams', JSON.stringify(favoriteTeams))
    }, [favoriteTeams])
    
  useEffect(() => {
    const updatedTeams = teams.map(team => {
        return {
        ...team,
        isFavorite: favoriteTeams.some(favTeam => favTeam.id === team.id)
        };
    });
    setTeams(updatedTeams);
    }, [favoriteTeams]);

  const toggleFav = (team: any) => {
    setFavoriteTeams(prevState => {
        const index = prevState.findIndex(t => t.id === team.id);
        if (index !== -1) {
            // If the team is already in favoriteTeams, remove it from the array
            const updatedTeams = [...prevState];
            updatedTeams.splice(index, 1);
            return updatedTeams;
        } else {
        // If the team is not in favoriteTeams, add it to the array
            return [{ ...team, isFavorite: true }, ...prevState];
        }
    });
  };
  /** helper function to toggle season */
  const toggleSeason = (event : any)=>{
      console.log('toggling season')
      setSeason(parseInt(event.target.value))
    }

  const toggleConference = (event : any) =>{
      console.log(`toggling conference ${event.target.value}`)
      if(event.target.value === 'east'){
          if(isEast){
              return
          }
          else{
              setIsEast(true)
              setIsWest(false)
          }
      }
      else if(event.target.value === 'west'){
          if(isWest){
              return
          }
          else{
              setIsWest(true)
              setIsEast(false)
          }
      }
  }

  /** creates list options for seasons */
  const seasonListOptions = seasonList().map((season: number)=>{
    return <option value={season} key={season}>
    {season} - {season + 1}
    </option>
  })

  const teamProps = {
    teams : teams,
    seasonList : seasonListOptions,
    toggleConference : toggleConference,
    isEast : isEast,
    isWest : isWest,
    toggleFav: toggleFav,
    toggleSeason : toggleSeason, 
    season: season
  }

  const favTeamProps = {
    favTeams : favoriteTeams,
    seasonList : seasonListOptions,
    toggleFav: toggleFav,
    toggleSeason : toggleSeason
  }

  return(
    <main>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Teams" element={<TeamsPage {...teamProps}/>}/>
      <Route path="/MyTeams" element={<MyTeamsPage {...favTeamProps}/>}/>
    </Routes>
    </main>
  )
}