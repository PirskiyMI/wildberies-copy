import 'src/shared/lib/styles/index.scss';

import { withProviders } from './providers';
import { Routing } from './routing';

const App = () => {
   return <Routing />;
};

const AppWithProviders = withProviders(App);

export default AppWithProviders;
