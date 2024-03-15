import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {StatePropsType} from "./redux/state";

type AppPropsType = {
  state: StatePropsType
}

export function App(props: AppPropsType) {
  
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content"}>
          <Route path="/dialogs"
                 render={() => <Dialogs state={props.state.dialogsPage}/>}
          />
          <Route path="/profile"
                 render={() => <Profile state={props.state.profilePage}/>}
          />
          
          
          {/*<Route path={"/profile"} component={Profile}/>*/}
          {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
        </div>
      </div>
    </BrowserRouter>
  );
}