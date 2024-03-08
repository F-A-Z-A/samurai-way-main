import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogPropsType, MessagesPropsType, PostsPropsType} from "./index";

type AppPropsType = {
  dialogs: DialogPropsType[]
  messages: MessagesPropsType[]
  posts: PostsPropsType[]
}

function App(props: AppPropsType) {
  
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content"}>
          <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
          <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
          
          {/*<Route path={"/profile"} component={Profile}/>*/}
          {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;