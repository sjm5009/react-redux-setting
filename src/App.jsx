import './App.css';
import Subscribers from './components/Subscribers';
import { Provider } from "react-redux";
import store from "./redux/store";
import Viewer from './components/Viewer';
import Comments from './components/Comments';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comments/>
        <Subscribers/>
        <Viewer/>
      </div>
    </Provider>
  );
}

export default App;
