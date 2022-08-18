import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./midleware/saga";
const sagaMiddleware = createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
