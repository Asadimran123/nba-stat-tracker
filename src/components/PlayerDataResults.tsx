import React, { useEffect } from "react"; 

export default function PlayerDataResults(props: any){
    const [currentPlayerData, setCurrentPlayerData] = React.useState<any[]>([]);
   
    useEffect(()=>{
        setCurrentPlayerData(props.playerData);
    }, [props.playerData]);

    const renderPlayerData = () =>{
        return currentPlayerData.map((player: any, index: number) => (
            <div key={index}>
                {Object.entries(player).map(([key, value]) => (
                    <div key={key} className="stat-line">
                        <span className="player-data-key"><b>{key}: </b></span>
                        <span>{String(value)}</span>
                    </div>
                ))}
            </div>
        ))
    }

    return (
        <div id="player-data-div">
            {props.playerID != undefined ? renderPlayerData() : <div style={{ display: 'none' }} id="player-data-div"></div>}
        </div>
    );
}