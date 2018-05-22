import React from "react";

export default class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="profile">
                    <img className="profile-picture" src="../images/profile.jpg"/>
                    <div className="about-text">
                        <h1>Hi!</h1>
                        <h2>Welcome to my site</h2>
                        <h2>My name is Kevin and I'm a 3A Systems Design Engineering Student at the University of Waterloo</h2>
                    </div>
                </div>
                <h1 style={{"textAlign": "center", padding: "50px 0", width:"100%"}}>
                    I'm also an aspiring Full-Stack Software Engineer</h1>
            </div>
        )
    }
}