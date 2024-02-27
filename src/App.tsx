import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content"}>
          <Route path={"/profile"} component={Profile}/>
          <Route path={"/dialogs"} component={Dialogs}/>
          <Route path={"/news"} component={Dialogs}/>
          <Route path={"/music"} component={Dialogs}/>
          <Route path={"/setting"} component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;