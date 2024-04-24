import React from "react";
import axios from 'axios';
import { useDebounce } from 'use-debounce';

export default function SearchBar(props: any){
    const [player, setPlayer] = React.useState("");
    const [debouncedPlayer] = useDebounce(player, 500); 


    const fetchPlayers = async(player: any)=>{
        try{
            const options = {
                method: 'GET', 
                url: 'https://6ug3gklzbc.execute-api.us-west-1.amazonaws.com/prod/playerSearch',
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
       fetchPlayers(debouncedPlayer);
    }, [debouncedPlayer]);

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