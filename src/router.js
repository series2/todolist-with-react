import React from "react";
import { Link } from "react-router-dom";

class Router extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/Todolist">Todolist</Link>
      </div>
    );
  }
}

export default Router;
