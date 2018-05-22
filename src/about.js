import React from "react";

export default class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="profile">
                    <img className="profile-picture" src="../images/profile.jpg"/>
                    <div className="about-text">
                        <h1 style={{"text-align": "center"}}>Hi!</h1>
                        <h2 style={{"text-align": "center"}}>Welcome to my site</h2>
                        <h2>My name is Kevin and I'm a 3A Systems Design Engineering Student at the University of Waterloo</h2>

                    </div>
                </div>
            </div>
        )
    }
}