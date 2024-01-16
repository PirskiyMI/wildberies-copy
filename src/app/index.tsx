import './styles/index.scss';

import Routing from 'src/pages';

import { withProviders } from './providers';

const App = () => {
   return <Routing />;
};

const AppWithProviders = withProviders(App);

export default AppWithProviders;
