import React from "react";
import axios from 'axios';

export default function SearchBar(){
    const [player, setPlayer] = React.useState("")

    React.useEffect(() => {
        const options = {
        method: 'GET', 
        url: 'http://localhost:5001/players',
        params: 
            { league: 'standard', 
            player: player
            }
        }

        axios.request(options).then((response)=>{
        console.log(response.data)
        })

        .catch((err : any) => {
        window.alert(`Could not load data. Refresh and try again ${err}`)
        console.log(err)
        });
    }, [player]);
    
    return(
        <div className="input-wrapper">
            <input 
                type="text" 
                placeholder="Search Players By Last Name" 
                id="player-search-input" 
                value={player} 
                onChange={(e)=> setPlayer(e.target.value)}
            />
        </div>
    )
}