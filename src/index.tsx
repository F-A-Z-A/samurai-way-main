import './index.css';
import store, {RootStateType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root')
  );
};
rerenderEntireTree(store.getState());
console.log(store.getState())

// store.subscribe(rerenderEntireTree);
// здесь мы state не передавали, потому-что в store мы это делали в функции
// dispatch(action) {
//   ...
//   this._callSubscriber(this._state);
// }
// меняем на :
store.subscribe(() => {
  rerenderEntireTree(store.getState())
});
// здесь мы передаем в store.subscribe анонимную функцию с определенным state rerenderEntireTree(store.getState())