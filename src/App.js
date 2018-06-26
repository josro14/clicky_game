import React, {Component} from "react";
import Nav from "./components/Nav/Nav";
import Header from './components/Header/Header';
import "./App.css";

//===================================================================================
//REDUX TUTORIAL
//https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt
//===================================================================================

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
            </div>
        );
    }
}


export default App;
