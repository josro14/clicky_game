import React, { Component } from "react";
import ClickItem from "./components/ClickItem";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Nav, {CHOOSE, CORRECT, INCORRECT} from "./components/Nav";
import NavMessage from "./components/NavMessage";
import "./App.css";

//REDUX TUTORIAL
//https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt

class App extends Component {

  fn() {

  }

  render() {
    return (
        <div>
          <Nav></Nav>
        </div>
    );
  }
};


export default App;
