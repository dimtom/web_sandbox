import './players.css'

function Players({data}) 
{
    const text = JSON.stringify(data);
    const listItems = data.people.map(player => <li>({player.id}) {player.name}</li>);  
    return (<div>
        <h1>Players</h1>
        <ui>
            {listItems}
        </ui>
        {/*<textarea rows="20" cols="40" defaultValue = {text}></textarea>*/}
        </div>);
}
export default Players;
