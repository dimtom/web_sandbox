
function Game({game, players}) {
    let slot_num = 0;
    let game_lines = game.players.map((player_id) => 
    {
        let player_name = players[player_id].name;
        return <tr>({slot_num++}) {player_name}</tr>
    }
    );
    
    return (
        <div>
            <h3>Game #{game.id}</h3>
            <td border="1">
                {game_lines}
            </td>
        </div>
    );
}

export default Game;