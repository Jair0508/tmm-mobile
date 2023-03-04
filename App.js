import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store from './src/redux/store'
import MainStack from './src/routes/MainStack';

export default function App() {
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  );
}