import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

// const rerenderEntireTree = (state: StateType) => {
const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}
      />
    </BrowserRouter>, document.getElementById('root')
  );
};
// rerenderEntireTree(store.getState());
rerenderEntireTree();

// store.subscribe(() =>  rerenderEntireTree(store.getState()));
store.subscribe(rerenderEntireTree);
