import './App.css';
import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Components/Home/Home';
import FourOhFour from './Components/FourOhFour';
import CompetitorCard from './Components/CompetitorCard';
import CustomNavBar from './Components/CustomNavBar';
import SportsCardDuo from './Components/SportsCardDuo';
import SportsCard from './Components/SportsCard/SportsCard';
import Category from './Components/Category/Category';
import CompetitorList from './Components/CompetitorList';


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
          <CompetitorList />
        </Route>


        <Route exact path="/competitor">
          <CompetitorCard />
        </Route>
        {/* this route is currently just a placeholders for the single competitors page, actual route in comment below 

        {/* <Route exact path="/competitors">
          {/* //single competitor page */}

        <Route path="/competitors/:id" render={({ match }) => (
          <CompetitorCard competitorId={match.params.id} />
        )} />

      
        <Route path="/categories">
          <Category />
        </Route>
        
        <Route exact path="/home">
          <SportsCardDuo>

          </SportsCardDuo>
          {/* //home based category */}
        </Route>

        <Route exact path="/garden">
          {/* //garden based category  */}
        </Route>

        <Route exact path="/mental">
          {/* //mental category  */}
        </Route>

        <FourOhFour />
      </Switch>

    </Fragment>
  </Router>
)

export default App;
