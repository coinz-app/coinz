import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <Router>
      <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
