import './styles/index.scss';

import { withProviders } from './providers';
import Routing from '../pages';

// git-test

const App = () => {
   return <Routing />;
};

export default withProviders(App);
