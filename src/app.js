import React from "react";
import Hero from "./hero";
import About from "./about";
import "../css/styles.scss";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Hero/>
                <About/>
            </div>
        )
    }
}