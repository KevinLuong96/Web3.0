import React from "react";
import styled, {keyframes} from "styled-components";

const HeroStyles = styled.div`
    height: 100%;
    position: relative;
`;

const Background = styled.img`
    position:absolute;
    width:100%;
    height:100vh;
`;

const Blink = keyframes`
    from, to { border-color: transparent }
    50% { border-color: currentColor; }
`;

const Typewriter = styled.h1`
    position:absolute;
    z-index: 1;
    color: white;
    top: 50%;
    font-size: 5em;
    display: inline;
    border-right: .05em solid currentColor;
    animation:
        ${Blink} .75s step-end infinite;
`;


const text = "Kevin Luong";
let interval;

export default class Hero extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            loading: true
        }
    }
    addText() {
        if (this.state.text.length < text.length) {
            this.setState({
                text: `${this.state.text}${text[this.state.text.length]}`
            })
        } else {
            clearInterval(interval);
        }
    }

    onLoad() {
        this.setState({
            loading: false
        })
        window.setTimeout(() => {
            interval = window.setInterval(() => this.addText(), 125)
        }, 1000)
    }

    render(){
        return (
            <div className="hero">
                <div className="spinner" style={{height: this.state.loading ? "100vh": 0}}>
                    {this.state.loading && <i className="fas fa-spinner"></i>}
                </div>
                <img className="background" src="./images/nyc.jpg"
                    onLoad={() => this.onLoad()}/>
                <h1 className="typewriter">{this.state.text}</h1>
            </div>
        )
    }
}