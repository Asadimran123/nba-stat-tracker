import React from "react";
import axios from 'axios';

export default function SearchBar(props: any){
    const [player, setPlayer] = React.useState("");

    const fetchPlayers = async(player: any)=>{
        try{
            const options = {
                method: 'GET', 
                url: 'http://localhost:5001/playerSearch',
                params: 
                    { 
                        search: player
                    }
                }
        
                const response = await axios.request(options);
                props.setPlayerSearchResults(response.data);
        }
        catch(err){
            window.alert(`Could not load player data. Refresh and try again ${err}`);
            console.log(err);
        }
    }

    const handleChange = (val: any) =>{
        setPlayer(val);
        // fetchPlayers(val);
    }

    React.useEffect( () => {
       fetchPlayers(player);
    }, [player]);

    return(
        <div className="input-wrapper">
            <input 
                type="text" 
                placeholder="Search Players By Last Name" 
                id="player-search-input" 
                value={player} 
                onChange={(e)=> handleChange(e.target.value)}
            />
        </div>
    )
}