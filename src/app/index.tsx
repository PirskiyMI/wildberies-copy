import './styles/index.scss';

import { withProviders } from './providers';
import Routing from '../pages';

const App = () => {
   return <Routing />;
};

const AppWithProviders = withProviders(App)

export default AppWithProviders;
