import './App.css';
import logo from '../../assets/logo.png';
import { Landing } from '../landing/Landing';
import Dashboard from '../dashboard/Dashboard';
import GamePlay from '../gameplay/GamePlay';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <img className="logo" src={ logo } alt="Grape Minds logo" />
      <Switch>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/gameplay">
          <GamePlay />
        </Route>
        {/* <Route to="/dash">
          <Dashboard />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
