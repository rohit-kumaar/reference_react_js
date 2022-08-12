import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducer from "./components/Myreducer/reducer";
import fetchPosts from "./components/Middleware/thunk";
import rootSaga from "./components/Middleware/saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
store.dispatch(fetchPosts());
sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
