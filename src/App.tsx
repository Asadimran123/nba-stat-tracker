import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Team from './components/Team'
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export default function App() {

  const [teams, setTeams] = useState<any[]>([])
  const [isEast, setIsEast] = useState(true)
  const [isWest, setIsWest] = useState(false)
  const [favoriteTeams, setFavoriteTeams] = useState<any[]>(()=>{
      const data = localStorage.getItem('favTeams')
      return data ? JSON.parse(data) : [] 
    }
  )
  const [season, setSeason] = useState(2023)
  const [seasonList, setSeasonList] = useState(()=> {
    const seasons = []
    for(let i = new Date().getFullYear() - 1; i >2017; i--){
      seasons.push(i)
    }
    return seasons
  })

  /** states to display */
  const [isTeams, setIsTeams] = useState(true)
  const [isMyTeams, setIsMyTeams] = useState(false)
  const [isPlayers, setIsPlayers] = useState(false)
  const [isMyPlayers, setIsMyPlayers] = useState(false)
  const [isContact, setIsContact] = useState(false)

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
  
  // Update the teams state whenever favoriteTeams changes
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


  const setPageToFavTeams = () =>{
    setIsMyTeams(true)
    setIsTeams(false)
    setIsPlayers(false)
    setIsMyPlayers(false)
    setIsContact(false)
  }

  const setPageToTeams = () =>{
    setIsMyTeams(false)
    setIsTeams(true)
    setIsPlayers(false)
    setIsMyPlayers(false)
    setIsContact(false)
  }

  const clearFavTeams = () =>{
    setFavoriteTeams([])
  }

  /** creates team cards */
  const teamCards = teams.map((team: any) =>(
    <Card 
    key={team.id} 
    name={team.team.name} 
    image={team.team.logo}
    wins={team.win.total}
    loses={team.loss.total}
    rank={team.conference.rank}
    conference={team.conference.name}
    isFavorite={team.isFavorite}
    addFavorite={()=>toggleFav(team)}
    season={`${team.season} - ${team.season + 1}`}
    />
  ))

  const eastCards = teamCards.filter(card => card.props.conference === 'east')
  const westCards = teamCards.filter(card => card.props.conference === 'west')

  const sortedEastCards = eastCards.sort((a, b)=> a.props.rank - b.props.rank)
  const sortedWestCards = westCards.sort((a, b)=> a.props.rank - b.props.rank)

  const favTeamCards = teamCards.filter(card => card.props.isFavorite === true)
  
  /** creates list options for seasons */
  const seasonListOptions = seasonList.map((season: number)=>{
    return <option value={season} key={season}>
      {season} - {season + 1}
      </option>
  })

  console.log(teams)
  console.log(favoriteTeams)

  return (
      <main>
          <Navbar
          teams={setPageToTeams}
          myTeams={setPageToFavTeams}
          />
          <div id="season-select">
            <select id="menu-select-season" onChange={toggleSeason}>
                {seasonListOptions}
            </select>
          </div>
         <button onClick={clearFavTeams}>clear fav teams</button>

          <div className='conference-btns-div'>
              {isTeams && <button onClick={toggleConference} value='east' className='conference-btns'>East </button>}
              {isTeams && <button onClick={toggleConference} value='west' className='conference-btns'>West </button>}
          </div>
          <div id="container">
              {isTeams && isEast && sortedEastCards}
              {isTeams && isWest && sortedWestCards}
              {isMyTeams && favTeamCards}
          </div>
      </main>
  );
}
