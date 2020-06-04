import React from 'react';
import logo from '../logo.svg';
import '../Css/App.css';
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import News from "./News";
import NewDetails from "./NewDetails";
import Contact from "./Contact";
import Routes from "../router/router";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes></Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
