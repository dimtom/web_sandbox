import React from "react";

function App() {
  const [message, setMessage] = React.useState("Nothing pressed yet")
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function handleStartPause(audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };



  return (
    <div>
      <button onClick={() => handleStartPause(bird1)}>Caspian Tern 1</button>
      <button onClick={() => handleStartPause(bird2)}>Caspian Tern 2</button>
      <p>{message}</p>
    </div>
  );
}

export default App;

