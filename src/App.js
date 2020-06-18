import './App.css';
import React, { Fragment } from "react";

import {
  Router as Router,
  Route,
  Switch,
} from "react-router-dom";
import history from './history';

import Home from './Components/Home/Home';
import FourOhFour from './Components/FourOhFour';
import CompetitorCard from './Components/CompetitorCard';
import CustomNavBar from './Components/CustomNavBar';

import Category from './Components/Category';

import SportsCard from './Components/SportsCard';

import CompetitorList from './Components/CompetitorList';


const App = () => (
  <Router history={ history }>
    <Fragment>
      <Switch>

        <Route exact path="/">
          <Home>
          </Home>
        </Route>
        <Route exact path="/competitors">
          <CompetitorList />
        </Route>

        <Route path="/competitors/:id" render={({ match }) => (
          <CompetitorCard competitorId={match.params.id} />
        )} />

        <Route exact path="/categories">
          <CustomNavBar />
          <Category />
        </Route>

        <Route path="/categories/:id/sports" render={({ match }) => (
          <SportsCard categoryId={match.params.id} />
        )} />

        <Route exact path="/404">
          <FourOhFour></FourOhFour>
        </Route>

        <FourOhFour />
      </Switch>

    </Fragment>
  </Router>
)

export default App;
