import './assets/css/App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import Header from './components/Header'




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
