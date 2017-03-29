import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import HomePage from './components/HomePage/HomePage';
import CulpritsPage from './components/CulpritsPage/CulpritsPage';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/purge' component={CulpritsPage} />
  </Route>
)


render(<Router history={browserHistory} routes={routes}/>,
        document.getElementById('app'))
