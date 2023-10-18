
import Game from './Game'
import Round from './Round'

function SchedulByRounds({ schedule, players }) {
    let round_lines = schedule.rounds.map((round) => {
        return <Round schedule={schedule} round = {round} players={players}/>;       
    });

    let conf_text = JSON.stringify(schedule.configuration);

    return (
        <div>
            <h2>Schedule by Rounds</h2>
            {round_lines}

        </div>
    );
}

export default SchedulByRounds;