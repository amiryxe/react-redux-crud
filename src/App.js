import { Provider } from 'react-redux';
import store from './store';
import './main.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        hi
      </div>
    </Provider>
  );
}

export default App;
