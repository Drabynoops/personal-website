import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './Components/Home'
import ProjectPage from './Components/ProjectPage'
import Resume from './Components/Resume'

library.add(fab, fas);

function App() {
  return (
    <div className="container fluid">
      <Router>
        <Navigation />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={ProjectPage} path="/projects" />
          <Route component={Resume} path="/resume" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
