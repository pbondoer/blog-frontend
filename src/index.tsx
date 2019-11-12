import { h, render } from 'preact';
import Router from 'preact-router';

import Home from '~/routes/Home';
import Post from '~/routes/Post';

const App = () => (
  <Router>
    <Home path="/" />
    <Post path="/post/:id/:slug?" />
  </Router>
);
App.displayName = 'App';

const element = document.getElementById('app');
if (element) {
  render(<App />, element);
}
