import './App.css';
import logo from '../../assets/logo.png';
import { Landing } from '../landing/Landing';
import Dashboard from '../dashboard/Dashboard';
import GamePlay from '../gameplay/GamePlay';
import GameOver from '../gameover/GameOver';
import { Switch, Route } from 'react-router-dom';
import { WineProvider } from '../../contexts/WineContext';

function App() {

  return (
    <div className="App">
      <img className="logo" src={ logo } alt="Grape Minds logo" />
      <Switch>
        <WineProvider>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/dash">
              <Dashboard />
            </Route> 
          </WineProvider>
          <Route exact path="/gameplay">
            <GamePlay />
          </Route>
          <Route exact path="/gameover">
            <GameOver />
          </Route>

      </Switch>
    </div>
  );
}

export default App;
