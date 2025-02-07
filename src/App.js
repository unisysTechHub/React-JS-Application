import logo from './logo.svg';
import './App.css';
import HorizontalMenu from './HorizontalMenu';
import  {Home }from './Home/Home'
import {ArcCanvas}  from './DrawHalfCircle';
function App() {
  return (
    
        
        <div className="App">
          <div className='titleContrainer'>
        <p className='title'> title </p>
        </div>
       <HorizontalMenu></HorizontalMenu>
       <div  >
       </div>
       <Home></Home>
       <ArcCanvas></ArcCanvas>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
