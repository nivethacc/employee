import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './containers/AppRouter/AppRouter';



class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
        <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;