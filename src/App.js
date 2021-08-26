import React, { Component } from "react";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import store from "./store";
import {getUsers} from './actions/rootAction';
class App extends Component {
  componentDidMount() {
    store.dispatch(getUsers())
    console.log(store.getState())
}
  render() {
    return (
      <Fragment>
          <Router>
          <Navbar/>
            <Switch>
            <Route path="/" exact>
              
            </Route>
            </Switch>
          </Router>
      </Fragment>
    );
  }
}

export default App;