import React from "react"
import SearchBar from "../../components/SearchBar"
export default function PlayersPage(){
    return(
        <div className="players-container">
            <h1 className="my-teams-header">Players</h1>
            <div className="search-container">
                <SearchBar />
                <div>Search results</div>
            </div>
        </div>
    )
}