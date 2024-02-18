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
  const [isTeams, setIsTeams] = useState(true) //state to check if teams is selected

  /** effect to get nbaFranchises and set state only once at start of app.  */
  useEffect(()=>{
      fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021', {
        "method": "GET",
        "headers": {
          'X-RapidAPI-Key': '42e01d8832msh4b5ae8aaade5ca2p1f6826jsnccb497854d8a',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      })
      .then(res => res.json())
      .then(data => setTeams(data.response))
      .catch(err => console.log(err));
  }, [])

  console.log(teams)

  const teamCards = teams.map((team: any) =>[
    <Card key={team.team.id} 
    name={team.team.name} 
    image={team.team.logo}
    wins={team.win.total}
    loses={team.loss.toal}
    rank={team.conference.rank}
    />
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
              {isTeams && teamCards}
          </div>
      </main>
  );
}
