import dictionaryIcon from "./dictionaryIcon.png";
import Dictionary from "./Dictionary";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return ( 
    <div className="App">
      <div className="container">              
        <header className="App-header">
          <img src={dictionaryIcon} className="App-logo" alt="logo"/>        
        </header>
        <main>
          <Dictionary defaultKeyword = "sunset"/>
        </main>
        <footer className="App-footer">
          Coded by <a href="https://www.linkedin.com/in/magdalena-gozdalik-3458202b/">Magda Gozdalik</a> and is open-sourced on <a href="https://github.com/magda5281/dictionary-project-react">GitHub</a> and hosted on <a href="https://dreamy-wozniak-7dc527.netlify.app/"> Netlify</a>.
        </footer>
      </div>
    </div> 
  );
}

 
