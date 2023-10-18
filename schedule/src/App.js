import './App.css';
import Players from './Players.js';
import ScheduleByPlayers from './ScheduleByPlayers.js'
import ScheduleByRounds from './ScheduleByRounds.js'
import {useRef} from 'react';

export default function App(){
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
    console.log(fileObj.value)
  };

  const players_json = require("./data/players.json");
  const people = players_json.people;
  const schedule_json = require("./data/schedule.json")
  return (
    <div>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button onClick={handleClick}>Open file upload box</button>
      <br/>
      
      <Players players={people} />
      <ScheduleByPlayers schedule = {schedule_json} players = {people}/>
      <ScheduleByRounds schedule = {schedule_json} players = {people}/>
      
    </div>
  );
};

