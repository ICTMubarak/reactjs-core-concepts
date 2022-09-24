import logo from './logo.svg';
import './App.css';

const number = 5555; 
const singer = {name: 'Dr. Mahfuj', job: 'Faltu song'}

const singerStyle={
  color: 'green'

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude.. React js!</h3>
        </div>
        <div className="music">
          <p>Name: {2222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} Job: {singer.job}</p>
        </div>
        <h1 className='singer'>OK</h1>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
