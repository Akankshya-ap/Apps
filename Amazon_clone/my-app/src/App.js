import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <Header />
          <h1>Login Page</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
{/* React router */}
{/* localhost.com */}
{/* localhost.com/login */}
{/* localhost.com/checkout */}
export default App;
