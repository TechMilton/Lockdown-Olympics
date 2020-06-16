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
import CompetitorCard from './Components/CompetitorCard/container';
import CompetitorCard from './Components/CompetitorCard/CompetitorCard';
import CustomNavBar from './Components/CustomNavBar';

import sports from '../src/imgs/sports.jpg';

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
<<<<<<< HEAD
          <CompetitorCard />
=======
          <div className="backgroundCompetitor">
            <PageHeading>Competitor Name</PageHeading>
            <CompetitorCard />
          </div>
        </Route>


        <Route>
          <PageHeading>Competitors</PageHeading>
>>>>>>> master
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
