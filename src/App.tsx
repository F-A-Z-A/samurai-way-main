import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/state";

type AppPropsType = {
  state: StateType
  dispatch: (action: ActionsTypes) => void
};

export const App: React.FC<AppPropsType> = (props) => {
  
  return (
    <div className={"app-wrapper"}>
      <Header/>
      <Navbar/>
      <div className={"app-wrapper-content"}>
        <Route path="/profile"
               render={() => <Profile
                 profilePage={props.state.profilePage}
                 dispatch={props.dispatch}/>}/>
        <Route path="/dialogs"
               render={() => <Dialogs
                 state={props.state.dialogsPage}
                 dispatch={props.dispatch}/>}/>
      </div>
    </div>
  );
};


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