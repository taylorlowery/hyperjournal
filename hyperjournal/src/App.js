import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard'
import Post from './components/posts/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/post/:id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
