import React from "react";

export default class Work extends React.Component {
    render() {
        return(
            <div className="work">
                <h1 className="work-title">Work Experience</h1>
                <div className="container">
                    <div className="company">
                        <img className="company-logo" src="../images/c1.svg"/>
                        <div>
                            <div className="company-name">
                                <h3>Correlation One</h3>
                                <h3>New York, New York</h3>
                            </div>
                            <h4>At Correlation One, I created an exlusive social media platform for the winners of our Datathons to keep them connected to each other and Correlation One.
                            This involved creating a full stack web application, dev-opsing all of the necessary Google Cloud stack and writing unit and integration tests. It was a lot of fun
                            making all of these architecture decisions for interfacing data between the layers. This was written in Golang, React, Redux and PostgreSQL.</h4>
                            <h4>I also worked on the backend for our AIGames platform enabling the feature of allowing users to upload bots to our server using Django and Google Cloud Storage</h4>
                        </div>
                    </div>
                    <div className="company">
                        <img className="company-logo" src="../images/connected.jpg"/>
                        <div>
                            <div className="company-name">
                                <h3>Connected Lab</h3>
                                <h3>Toronto, Ontario</h3>
                            </div>
                            <h4>At Connected Lab, I worked on a voice interface prototyping tool created in React with MongoDB and Express on the back end. It ended up
                            being utilized by a billion dollar Connected Lab client and gave them valuable insights into what users wanted to know and how users wanted to interact with the voice interface</h4>
                            <h4>I also worked on the Amazon Alexa skill for iHeartRadio. The Amazon Alexa skill for iHeartRadio is actually one of the few native
                            skills that ship with Amazon Alexa, and it allowed users to ask Amazon Alexa to play songs or radio by artists. This involved interfacing the
                            Amazon Alexa and iHeartRadio song APIs.</h4>
                            <h4>I can't talk much about this one, but I created an operations portal for one of Canada's largest retailers using Spring, and React-Redux
                            in order to help them manage and track thousands of daily orders across Canada</h4>


                        </div>
                    </div>
                    <div className="company">
                        <img className="company-logo" src="../images/smart.svg"/>
                        <div>
                            <div className="company-name">
                                <h3>Smart Technologies</h3>
                                <h3>Calgary, Alberta</h3>
                            </div>
                            <h4>At Smart Technologies, I created a feature for our online whiteboarding platform written in EmberJS that is used by thousands of teachers across Canada and the USA daily.
                            It was very interesting to be able to bring a feature from an idea, to a design, to asking senior developers how I could implement it and then actually implementing and shipping the feature.</h4>
                            <h4>I also lead web development on a month long project to create an education game that shipped to SmartBoards across North America in early 2017.</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}