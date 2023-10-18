import './Players.css'

function Players({players}) 
{
    const listItems = players.map(player => <li>({player.id}) {player.name}</li>);  
    return (<div>
        <h1>Players</h1>
        <ul>
            {listItems}
        </ul>
        </div>);
}

export default Players;
