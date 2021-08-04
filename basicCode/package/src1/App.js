import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> My First React </h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          React is a elite front-end library. There are hundreds of applications. Good practice makes perfect.
          </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
