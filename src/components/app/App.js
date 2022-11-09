import './App.css';
import logo from '../../assets/logo.png';
import { Landing } from '../landing/Landing';
import Dashboard from '../dashboard/Dashboard';
import GamePlay from '../gameplay/GamePlay';
import GameOver from '../gameover/GameOver';
import { Switch, Route } from 'react-router-dom';
import { ScoreProvider } from '../../contexts/ScoreContext';

function App() {

  return (
    <div className="App">
      <img className="logo" src={ logo } alt="Grape Minds logo" />
      <Switch>
        <Route path="/landing">
          <Landing />
        </Route>
        <ScoreProvider>
          <Route path="/gameplay">
            <GamePlay />
          </Route>
          <Route path="/gameover">
            <GameOver />
          </Route>
          {/* <Route to="/dash">
            <Dashboard />
          </Route> */}
        </ScoreProvider>
      </Switch>
    </div>
  );
}

export default App;
