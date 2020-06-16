import './App.css';
import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Components/Home/Home';
import FourOhFour from './Components/FourOhFour';
import CompetitorCard from './Components/CompetitorCard/container';
import CustomNavBar from './Components/CustomNavBar';


const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/">
          <CustomNavBar />
          <Home>
          </Home>
        </Route>


        <Route exact path="/competitors">
          <CompetitorCard />
        </Route>
        

        {/* <Route exact path="/competitors">
          {/* //single competitor page */}
        
        <Route path="/competitors/:id" render={({ match }) => (
          <CompetitorCard id={match.params.id} />
        )} /> */}

        <Route exact path="/home">
          {/* //home based category */}
        </Route>

        <Route exact path="/garden">
          {/* //garden based category  */}
        </Route>

        <Route exact path="mad">
          {/* //mad category  */}
        </Route>

        <FourOhFour />
      </Switch>

    </Fragment>
  </Router>

)

export default App;
