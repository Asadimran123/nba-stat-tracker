import React from "react";
import TeamsPage from "./Teams";
import Card from "../../components/Card";

type TeamProps = {
    favTeams : any[],
    seasonList : any[],
    toggleFav: (team: any) => void,
    toggleSeason: (event: any) => void 
}; 

export default function MyTeamsPage(props: TeamProps){

    const favTeamCards = props.favTeams.map((team: any) =>(
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
    )).sort((a: JSX.Element, b: JSX.Element)=> a.props.season - b.props.season)

    return(
        <main className="my-teams-page">
            <h1 id="my-teams-header">My Teams</h1>
            <div id="container">
                {favTeamCards}
             </div>
        </main>
    )
}
