import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 
import Add from '../Add';
import History from '../History';
import './App.css';

class App extends Component {
  render() {
    const { isExact } = this.props.match;

    return (
      <div className="App">
        <div className="header">
            <div className={`nav ${ isExact ? 'flex-left' : 'flex-right'}`}>
              <Link to="/history" className={`nav-left ${ !isExact ? 'hide' : '' }`}>
                <img src="/history-icon.png" alt="history-icon"/>
              </Link>
              <Link to="/" className={`nav-right ${ isExact ? 'hide' : '' }`}>
                <img src="/add-icon.png" alt="add-icon"/>
              </Link>
            </div>
            <div className="out-of">
                <strong>$835</strong>/$1000 left
            </div>
            <div className="progress-bar">
              <div className="progress-text">$165</div>
            </div>
        </div>
        <Route exact path="/" component={Add} />
        <Route path="/history" component={History} />
      </div>
    );
  }
}

export default App;
