import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>Test</h2>
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);