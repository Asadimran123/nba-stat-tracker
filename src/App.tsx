import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import React, { useEffect, useState } from 'react';

export default function App() {

  interface Team {
    allStar: boolean
    city: string
    code: string
    id: number
    leagues: object
    logo: string
    name: string
    nbaFranchise: boolean
    nickname: string
  }

  const [teams, setTeams] = useState([])

  /** effect to get nbaFranchises and set state only once at start of app.  */
  useEffect(()=>{
      fetch("https://api-nba-v1.p.rapidapi.com/teams", {
        "method": "GET",
        "headers": {
          'X-RapidAPI-Key': '42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      })
      .then(res => res.json())
      .then(data => {
        const nbaFranchises = data.response.filter((team: Team)=> team.nbaFranchise === true)
        nbaFranchises.splice(27, 1) //removing stephen a team. why is this in there LOL 
        setTeams(nbaFranchises)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const teamCards = teams.map((team: Team) =>[
    <Card key={team.id} name={team.name} image={team.logo}/>
  ])

  return (
      <main>
          {/* Include Navbar and other elements */}
          <Navbar/>
          <select id="menu-select">
              <option value="Teams">Teams</option>
              <option value="Players">Players</option>
              <option value="My Teams">My Teams</option>
              <option value="My Players">My Players</option>
          </select>
          <div id="container">
              {teamCards}
          </div>
      </main>
  );
}
