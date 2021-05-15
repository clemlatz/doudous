import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeView from "./HomeView";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
