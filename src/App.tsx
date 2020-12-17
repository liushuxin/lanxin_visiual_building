import { Route, Link } from "react-router-dom";
import Home from "./page/Home";
import User from "./page/User";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/a" className="App-link">
        Home
      </Link>
      <Link to="/user" className="App-link">
        User
      </Link>
      <Route exact path="/a" component={Home} />

      <Route exact path="/user" component={User} />
    </div>
  );
}

export default App;
