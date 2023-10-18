
import Game from './Game'

function SchedulByRounds({schedule, players}) {
    let games_items = schedule.games.map((game) => 
    {
        return <Game game={game} players={players}/>;
    });

    let conf_text = JSON.stringify(schedule.configuration);
    
    return (
        <div>
            <h2>Schedule by Rounds</h2>
            <p>Total number of games: {schedule.games.length}</p>
            <h3>Configuration:</h3>
            <p>{conf_text}</p>

            {games_items}
        </div>
    );
}

export default SchedulByRounds;