import React, { useEffect } from "react"; 

export default function PlayerDataResults(props: any){
    const [currentPlayerData, setCurrentPlayerData] = React.useState<any[]>([]);
   
    useEffect(()=>{
        setCurrentPlayerData(props.playerData);
    }, [props.playerData]);

    const renderPlayerData = (statType: string) =>{
        if(statType === "averages" && currentPlayerData.length > 0 && currentPlayerData[2]){
            return (
               <div className="table-container">
                 <table className="player-table">
                    <tbody>
                    {Object.entries(currentPlayerData[0]).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tbody>
                    {Object.entries(currentPlayerData[2]).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
               </div>
            )
        }
        else if (statType === "totals" && currentPlayerData.length > 0 && currentPlayerData[1]){
            return (
                <div className="table-container">
                    <table className="player-table">
                    <tbody>
                    {Object.entries(currentPlayerData[0]).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                </tbody>
                   <tbody>
                    {Object.entries(currentPlayerData[1]).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
            )
        }

        if(currentPlayerData.length === 1){
            return <div>No Data available</div>
        }

        else{
            return null;
        }
    }

    return (
        <div id="player-data-div">
            {props.playerID != undefined ? renderPlayerData(props.statType) : <div style={{ display: 'none' }} id="player-data-div"></div>}
        </div>
    );
    
}





   // return currentPlayerData.map((player: any, index: number) => (
        //     <div key={index}>
        //         {Object.entries(player).map(([key, value]) => (
        //             <div key={key} className="stat-line">
        //                 <span className="player-data-key"><b>{key}: </b></span>
        //                 <span>{String(value)}</span>
        //             </div>
        //         ))}
        //     </div>
        // ))