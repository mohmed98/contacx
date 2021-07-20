import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Contacts from "./pages/Contacts";
import Edit from './pages/Edit'
import Single from "./pages/Single";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Contacts </Link>
            </li>
            <li>
              <Link to="/single"> About </Link>
            </li>
            <li>
              <Link to="/users"> Users </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




