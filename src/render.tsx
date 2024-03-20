import {addMessage, addPost, StatePropsType, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

export const rerenderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>, document.getElementById('root')
  );
}