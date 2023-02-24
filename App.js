import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store from './src/redux/store'
import FullStackNavigator from './src/routes/FullStackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <FullStackNavigator/>
    </Provider>
  );
}