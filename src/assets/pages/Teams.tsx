import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

type TeamProps = {
    teams: any[], // Assuming Team is a specific type representing a team
    seasonList: JSX.Element[], // Assuming seasonListOptions returns an array of JSX elements
    toggleConference: (event: any) => void, // Assuming toggleConference handles button click events
    isEast: boolean, 
    isWest: boolean,
    season: number,
    toggleFav: (team: any) => void, // Assuming toggleFav handles toggling favorite teams
    toggleSeason: (event: any) => void // Assuming toggleSeason handles select change events
}; 
export default function TeamsPage(props: TeamProps){

/** creates team cards */
const teamCards = props.teams.map((team: any) =>(
    <Card 
    key={team.id} 
    name={team.team.name} 
    image={team.team.logo}
    wins={team.win.total}
    loses={team.loss.total}
    rank={team.conference.rank}
    conference={team.conference.name}
    isFavorite={team.isFavorite}
    addFavorite={()=>props.toggleFav(team)}
    season={`${team.season} - ${team.season + 1}`}
    />
))

const eastCards = teamCards.filter((card: JSX.Element) => card.props.conference === 'east')
const westCards = teamCards.filter((card: JSX.Element) => card.props.conference === 'west')

const sortedEastCards = eastCards.sort((a: JSX.Element, b: JSX.Element)=> a.props.rank - b.props.rank)
const sortedWestCards = westCards.sort((a: JSX.Element, b: JSX.Element)=> a.props.rank - b.props.rank)
        
return(
    <main>
        <div id="select">
            {<button onClick={props.toggleConference} value='west' className='select-btns'>West </button>}
            <select id="menu-select-season" className='select-btns' onChange={props.toggleSeason} value={props.season}>
              {props.seasonList}
            </select>
            {<button onClick={props.toggleConference} value='east' className='select-btns'>East </button>}
        </div>
  
        <div id="container">
            {props.isEast && sortedEastCards}
            {props.isWest && sortedWestCards}
        </div>
    </main>
)

}



