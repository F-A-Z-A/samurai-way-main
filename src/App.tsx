import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {StatePropsType} from "./redux/state";

type AppPropsType = {
  state: StatePropsType
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
  addMessage: () => void
  updateNewMessageText: (newMessageText: string) => void
};

export const App: React.FC<AppPropsType> = (props) => {
  
  return (
    <div className={"app-wrapper"}>
      <Header/>;
      <Navbar/>;
      <div className={"app-wrapper-content"}>
        <Route path="/dialogs"
               render={() => <Dialogs
                 state={props.state.dialogsPage}
                 addMessage={props.addMessage}
                 updateNewMessageText={props.updateNewMessageText}
               />}
        />;
        <Route path="/profile"
               render={() => <Profile
                 profilePage={props.state.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
               />}
        />;
      </div>
    </div>
  );
}


//
// type MessagePropsType = {
//   message: string
// }
//
// function HelloMassage(props: MessagePropsType) {
//   const postMessageRef = React.createRef<HTMLTextAreaElement>();
//
//   const addPost = () => {
//     console.log(postMessageRef.current?.value)
//   }
//
//   return <div>
//     {props.message}
//     <textarea ref={postMessageRef}></textarea>
//     <button onClick={addPost}></button>
//   </div>
// }