import './App.css';

function App() {

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

  return (
    <div className="App">
      <button onClick={fetchFromServer}>
        Click
      </button>
    </div>
  );
}

export default App;
