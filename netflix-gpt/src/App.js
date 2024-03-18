import Body from "./components/Body.js";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore.js";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
