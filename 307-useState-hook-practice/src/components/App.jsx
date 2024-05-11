import React,{useState} from "react";






function App() {

const now = new Date().toLocaleTimeString();
const [showtime, setShowtime] = useState(now);

function updateTime(){
  const newTime = new Date().toLocaleTimeString();
  setShowtime(newTime);
}

setInterval(updateTime, 1000);



  return (
    <div className="container">
      <h1>{showtime}</h1>
      <button onClick={updateTime} >Get Time</button>
    </div>
  );
}

export default App;
