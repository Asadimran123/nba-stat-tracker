// @ts-ignore
export default function SearchResults(props: any) {
    const selectPlayer = (playerId: string) => {
        props.setPlayer(playerId)
        props.setPlayerSearchResults([])
    };

    const results = props.searchResults.map((player: any) => {
        return (
            <button
                key={player.id}
                className="player-button"
                onClick={() => selectPlayer(player.id)}
            >
                {player.lastname + ", " + player.firstname}
            </button>
        );
    });

    console.log(results);

    return (
        <div className="results-list">
            {results}
        </div>
    );
}
