import './App.css';
import logo from '../../assets/logo.png';
import { Landing } from '../landing/Landing';
import Dashboard from '../dashboard/Dashboard';
import GamePlay from '../gameplay/GamePlay';
import GameOver from '../gameover/GameOver';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <img className="logo" src={ logo } alt="Grape Minds logo" />
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
            </Route> 
          <Route path="/gameplay">
            <GamePlay />
          </Route>
          <Route path="/gameover">
            <GameOver />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
