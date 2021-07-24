import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import Contacts from "./pages/Contacts";
import Create from "./pages/Create";
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
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




