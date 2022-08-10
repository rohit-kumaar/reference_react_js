const root = ReactDOM.createRoot(document.getElementById("root"));
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/Myreducer/reducer";
const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
