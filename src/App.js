import React from 'react';

// * modules

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// * components

import Home from './pages/Home';
import Posts from './pages/Posts';

// * utils

import './utils/styles.css';

//

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts/:id" component={Posts} exact />
      </Switch>
    </Router>
  );
}

export default App;
// + Desenvolvido por Hubert Ryan
