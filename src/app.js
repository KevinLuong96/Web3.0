import React from "react";
import Hero from "./hero";
import "../css/styles.scss";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <Hero/>
            </div>
        )
    }
}