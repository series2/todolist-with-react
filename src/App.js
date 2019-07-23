import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/Home.css";
//import Routertest from "./router.js";
import Todolist from "./todolist.js";
import Home from "./Home.js";
import Todolist2 from "./todolist2.js";
import Test from "./test.js";

function App() {
  return (
    <div className="Home">
      <header className="Home-header">
        <a
          className="Todolist-link"
          href="./todolist"
          rel="noopener noreferrer"
        >
          Todolist
        </a>
        <a className="home-link" href="./home" rel="noopener noreferrer">
          Home
        </a>
        <a
          className="Todolist2-link"
          href="./todolist2"
          rel="noopener noreferrer"
        >
          Todolist2
        </a>
        <a className="Test-link" href="./test" rel="noopener noreferrer">
          Test
        </a>
        <Router>
          <div>
            <Route path="/todolist" component={Todolist} />
            <Route path="/home" component={Home} />
            <Route path="/todolist2" component={Todolist2} />
            <Route path="/test" component={Test} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
