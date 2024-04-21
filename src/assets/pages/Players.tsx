import React from "react";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
export default function PlayersPage(props: any){

    const [playerSearchResults, setPlayerSearchResults] = React.useState<any[]>([])
    const [playerID, setPlayerID] = React.useState<any>({})


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
            </div>
        </div>
    )
}