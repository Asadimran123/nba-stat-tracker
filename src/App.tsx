import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import React, { useEffect, useState } from 'react';

export default function App() {

  // interface Team {
  //   allStar: boolean
  //   city: string
  //   code: string
  //   id: number
  //   leagues: object
  //   logo: string
  //   name: string
  //   nbaFranchise: boolean
  //   nickname: string
  // }

  const [teams, setTeams] = useState([])
  const [season, setSeason] = useState(2023)
  const [seasonList, setSeasonList] = useState(()=> {
    const seasons = []
    for(let i = new Date().getFullYear() - 1; i >2017; i--){
      seasons.push(i)
    }
    return seasons
  })
  const [isTeams, setIsTeams] = useState(true) //state to check if teams is selected

  /** effect to get nbaFranchises and set state only once at start of app.  */
  useEffect(()=>{
      fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${season}`, {
        "method": "GET",
        "headers": {
          'X-RapidAPI-Key': '42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      })
      .then(res => res.json())
      .then(data => setTeams(data.response))
      .catch(err => console.log(err));
  }, [season])

  console.log(teams)
  
  /** creates team cards */
  const teamCards = teams.map((team: any) =>[
    <Card key={team.team.id} 
    name={team.team.name} 
    image={team.team.logo}
    wins={team.win.total}
    loses={team.loss.total}
    rank={team.conference.rank}
    conference={team.conference.name}
    />
  ])

  /** helper function to toggle season */
  const toggleSeason = (event : any)=>{
    console.log('toggling season')
    setSeason(parseInt(event.target.value))
  }

  /** creates list options for seasons */
  const seasonListOptions = seasonList.map((season: number)=>{
    return <option value={season} key={season}>
      {season} - {season + 1}
      </option>
  })

  return (
      <main>
          <Navbar/>
          <div id="season-select">

            <select id="menu-select-season" onChange={toggleSeason}>
                {seasonListOptions}
            </select>
          </div>

          <div id="container">
              {isTeams && teamCards}
          </div>
      </main>
  );
}
