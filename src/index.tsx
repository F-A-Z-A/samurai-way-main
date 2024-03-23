import './index.css';
import {StatePropsType, store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

const rerenderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={store.addPost.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateNewMessageText={store.updateNewMessageText.bind(store)}/>
    </BrowserRouter>, document.getElementById('root')
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);