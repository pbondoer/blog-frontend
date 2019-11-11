import { h, Fragment } from 'preact';

type Props = {
  path?: string;
};

const Home = ({}: Props) => (
  <Fragment>
    <h1>Hello from Preact!</h1>
    <section>Everything seems to be working as intended!</section>
  </Fragment>
);
Home.displayName = 'Home';

export default Home;
