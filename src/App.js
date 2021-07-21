import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import Contacts from "./pages/Contacts";
import Edit from './pages/Edit'
import Single from "./pages/Single";
import Nav from "./parts/Nav";

export default function App() {
  return (
    <Router>
      <Nav />
      <div>

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




