import { h, render } from 'preact';
import Router from 'preact-router';

import Home from '~/routes/Home';

const App = () => (
  <Router>
    <Home path="/" />
  </Router>
);
App.displayName = 'App';

const element = document.getElementById('app');
if (element) {
  render(<App />, element);
}
