import './App.css';
import logo from '../../assets/logo.png';
import { Landing } from '../landing/Landing';
import Dashboard from '../dashboard/Dashboard';
import GamePlay from '../gameplay/GamePlay';
import GameOver from '../gameover/GameOver';
import ErrorPage from '../errorPage/ErrorPage';
import { Switch, Route } from 'react-router-dom';
import mascot from '../../assets/smart-grape.png';

function App() {

  return (
    <div className="App">
      <div className="logos">
        <img className="logo" src={ logo } alt="Grape Minds logo" />
        <img className="mascot" src={ mascot } alt="Cartoon grape character" />
      </div>
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/dashboard">
              <Dashboard />
            </Route> 
          <Route exact path="/gameplay">
            <GamePlay />
          </Route>
          <Route exact path="/gameover">
            <GameOver />
          </Route>
          <Route path="/">
            <ErrorPage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
