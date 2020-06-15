import './App.css';
import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Components/Home/Home';
import PageHeading from './Components/PageHeading';
import FourOhFour from './Components/FourOhFour';
import CompetitorCard from './Components/CompetitorCard/CompetitorCard';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Home>
          </Home>
        </Route>

        <Route exact path="/categories">
        <PageHeading>Categories</PageHeading>
        </Route>

        <Route exact path="/competitors">
        <PageHeading>Competitor Name</PageHeading>
        <CompetitorCard />
        </Route>

        <Route exact path="/competitor">
        //single competitor page
        </Route>
        {/* <Route path="/competitors/:id" render={({ match }) => (
          <Competitor competitor={match.params.id} />
        )} /> */}

        <Route exact path="/home">
        //home based category
        </Route>

        <Route exact path="/garden">
        //garden based category 
        </Route>

        <Route exact path="mad">
        //mad category 
        </Route>

      <FourOhFour /> 
      </Switch>

    </Fragment>
  </Router>

)

export default App;
