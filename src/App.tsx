import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components 
// import MainView from './views/MainView'
import GameView from './views/GameView'






function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={MainView} /> */}
          <Route path="/" exact component={GameView} />
          {/* <Route path="/" component={MainView} /> */}
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
