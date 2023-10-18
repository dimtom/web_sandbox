import './Players.css'

function Players({ players }) {
    const listItems = players.map(player => {
        return <tr>
            <td>{player.id}</td>
            <td>{player.name}</td>
        </tr>;
    });
    return <div>
        <h1>Players</h1>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            {listItems}
        </table>
    </div>;
}

export default Players;
