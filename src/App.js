import { useState } from 'react';
import './App.css';

function App() {
  const [playerSeat, setPlayerSeat] = useState(undefined)

  function fetchFromServer() {
    fetch("http://localhost:3000")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  }

  function joinSeat(seatNumber) {
      setPlayerSeat(seatNumber)
      fetchFromServer()
      console.log(seatNumber)
  }

  return (
    <div className="App">
      {playerSeat === undefined && <div>
        <button onClick={() => joinSeat(1)}>
          Join Seat 1
        </button>
        <button onClick={() => joinSeat(2)}>
          Join Seat 2
        </button>
      </div>}
      <p>
        Seat: {playerSeat}
      </p>
    </div>
  );
}

export default App;
