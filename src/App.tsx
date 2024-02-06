import React from 'react';
import './App.css';
import {Tachnologies} from "./components/Tachnologies";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

console.log('alalalla')

function App() {
    return (
        <div>
            <Header/>
            <Tachnologies/>
            <Footer/>
        </div>
    );
}

export default App;