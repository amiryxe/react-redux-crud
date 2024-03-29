import { Provider } from 'react-redux';
import store from './store';
import Tasks from './Containers/Tasks';
import './main.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
