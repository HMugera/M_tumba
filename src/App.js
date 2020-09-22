import React from "react";
import "./App.css";
import { Switch, Route,Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const Hats = (props) => (

  <div>
    <h1>Home Page</h1>
  </div>

)

const Jacket = (props) => (
  <div>
    <h1>Jackets Page</h1>
  </div>

)


function App() {
  return (
    //  <HomePage/>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={Hats} />
        <Route path="/jackets" component={Jacket} />
      </Switch>
      
    </div>
  );
}

export default App;

