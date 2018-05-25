import React from "react";
import Hero from "./hero";
import About from "./about";
import Work from "./work";
import Contact from "./contact";
import Interests from "./interests";
import "../css/styles.scss";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Hero/>
                <About/>
                <Work/>
                <Contact/>
                <Interests/>
            </div>
        )
    }
}