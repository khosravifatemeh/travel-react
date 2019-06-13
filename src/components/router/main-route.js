import React from 'react';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Home from '../../pages/home';
import RouteLayout from '../layouts/route-layout'
import NotFound from '../../pages/notfound'



const App=()=> {
    return (
      <Router>
          <Switch>
              <RouteLayout exact path="/" component={Home} />
              <Route component={NotFound}  />
          </Switch>
      </Router>
    );
}


export default App;