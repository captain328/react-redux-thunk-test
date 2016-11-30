import React, { Component } from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../store';
import * as Components from '../';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Components.Layout}>
            <IndexRoute component={Components.Home} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export { App };
