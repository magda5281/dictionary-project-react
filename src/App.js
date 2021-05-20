
import './App.css';
import dictionaryIcon from "./dictionaryIcon.png";
import Dictionary from "./Dictionary";

export default function App() {
  return ( 
    <div className="App">
      <div className="container">              
        <header className="App-header">
          <img src={dictionaryIcon} className="App-logo" alt="logo"/>        
        </header>
        <main>
          <Dictionary/>
        </main>
        <footer className="App-footer">
          Coded by Magda Gozdalik
        </footer>
      </div>
    </div> 
  );
}

 
