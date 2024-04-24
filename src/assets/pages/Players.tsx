import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import axios from "axios";
import PlayerDataResults from "../../components/PlayerDataResults";
export default function PlayersPage(props: any){

    const [playerSearchResults, setPlayerSearchResults] = React.useState<any[]>([])
    const [playerID, setPlayerID] = React.useState<number>()
    const [playerData, setPlayerData] = React.useState<any>([])


    const fetchPlayerData = async(playerID: any) =>{
        try{
            console.log("getting")
            const options = {
                method: 'GET', 
                url: 'https://6ug3gklzbc.execute-api.us-west-1.amazonaws.com/prod/playerStats',
                params: 
                    { 
                        id: playerID, 
                        season: props.season
                    }
                }
        
                const response = await axios.request(options);
                setPlayerData(response.data);
        }
        catch(err){
            window.alert(`Could not load player data. Refresh and try again ${err}`);
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchPlayerData(playerID)
    }, [playerID, props.season])

    console.log(playerID)

    return(
        <div className="players-container">
            <h1 className="my-teams-header">Players</h1>
            <div className="search-container">
            <select id="menu-select-season" className='select-btns' onChange={props.toggleSeason} value={props.season}>
              {props.seasonList}
            </select>
                <SearchBar setPlayerSearchResults={setPlayerSearchResults}/>
                <SearchResults 
                searchResults={playerSearchResults}
                setPlayer={setPlayerID}
                setPlayerSearchResults={setPlayerSearchResults}
                />
                <PlayerDataResults 
                playerData = {playerData}
                playerID = {playerID}
                />
            </div>
        </div>
    )
}