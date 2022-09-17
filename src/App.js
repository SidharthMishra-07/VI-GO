import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Land from './Components/Land';
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Switch>
          <Route exact path="/">
            <Land/>
            </Route>
            <Route exact path="/home">
            <Navbar />
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
