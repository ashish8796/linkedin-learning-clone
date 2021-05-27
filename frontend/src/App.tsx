import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
