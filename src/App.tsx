import './App.css'
import Navbar from './components/Navbar'
// @ts-ignore
import React, { useEffect, useState } from 'react';
import  {Route, Routes} from "react-router-dom"
import Home from './assets/pages/Home';
import TeamsPage from './assets/pages/Teams';
import MyTeamsPage from './assets/pages/MyTeams';
import AboutPage from './assets/pages/About';
import Contact from './assets/pages/Contact';
import PlayersPage from './assets/pages/Players';
import axios from 'axios';

export default function App() {
  const [teams, setTeams] = useState<any[]>([])
  const [favoriteTeams, setFavoriteTeams] = useState<any[]>(()=>{
      const data = localStorage.getItem('favTeams')
      return data ? JSON.parse(data) : [] 
      }
  )
  const [season, setSeason] = useState(2023)
  const [isEast, setIsEast] = useState(true)
  const [isWest, setIsWest] = useState(false)
  const seasonList = ()=> {
    const seasons = []
    for(let i = new Date().getFullYear() - 1; i > 2017; i--){
        seasons.push(i)
    }
    return seasons
    }

    const [loading, setLoading] = useState(true);
  
  /** effect to get nbaFranchises and set state only once at start of app.  */
  useEffect(() => {

    const options = {
      method: 'GET', 
      url: 'https://6ug3gklzbc.execute-api.us-west-1.amazonaws.com/prod/teams',
      params: 
        { league: 'standard', 
          season: season
        }
    }

    axios.request(options).then((response)=>{
      console.log(response.data)
      const updatedTeams = response.data.map((team: any) => {
        const new_id = `${team.team.id}-${team.season}`
        delete team.team.id
        return {
            ...team,
            id: new_id,
            isFavorite: favoriteTeams.find(team => team.id === new_id) ? true : false
        };
        });
        setTeams(updatedTeams);
        setLoading(false)
    })

    .catch((err : any) => {
      window.alert(`Could not load data. Refresh and try again ${err}`)
      console.log(err)
    });
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
      setLoading(true);
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
    season: season,
    loading: loading
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
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Players" element={<PlayersPage />}/>
    </Routes>
    </main>
  )
}