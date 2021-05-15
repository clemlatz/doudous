import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeView from "./HomeView";
import BookView from "./BookView";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/livre/:volume">
            <BookView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
