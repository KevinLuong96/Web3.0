import React from "react";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h1 className="contact-header">Let's Talk!</h1>
                <h3 className="contact-text">If you have any questions about my <a className="resume" href="./resume.pdf">resume</a>, or just want to grab coffee. I would love to hear from you.</h3>
                <div className="contact-container">
                    <a href="https://github.com/kevinluong96">
                        <i className="fab fa-github contact-icon"/>
                    </a>
                    <a href="mailto:kevinluong2854@gmail.com">
                        <i className="fas fa-envelope contact-icon"/>
                    </a>
                </div>
            </div>
        )
    }
}