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
                            <h4>At Correlation One, I created an exlusive social media platform for the winners of our Datathons to help keep them connected to each other and Correlation One.
                            This involved creating a full stack web application, dev-opsing all of the necessary Google Cloud stack and writing unit and integration tests.</h4>
                            <ul>
                                <li className="bullet">Built test driven front end features such as profile picture upload utilizing React, Redux, RxJS and Redux-Observable</li>
                                <li className="bullet">Developed microservice architecture based RESTful API using Golang</li>
                                <li className="bullet">Specced out and implemented a PostgreSQL database deployed on Google Cloud Storage</li>
                                <li className="bullet">Performed development operations to interface Google Firebase, CloudSQLPostgreSQL database and Compute Engine server</li>
                            </ul>
                            <h4>Designed and implemented file upload to GCS using Django and React</h4>
                        </div>
                    </div>
                    <div className="company">
                        <img className="company-logo" src="../images/connected.jpg"/>
                        <div>
                            <div className="company-name">
                                <h3>Connected Lab</h3>
                                <h3>Toronto, Ontario</h3>
                            </div>
                            <h4>Created a voice interface prototyping tool using React, IBM Watson, MongoDB used by a billion dollar telecommunications client</h4>
                            <h4>Implemented song, radio, genre, artist search for the Amazon Alexa iHeartRadio native application</h4>
                            <h4>Created an operations portal to manage thousands of daily orders for one of Canada's largest retailers</h4>
                        </div>
                    </div>
                    <div className="company">
                        <img className="company-logo" src="../images/smart.svg"/>
                        <div>
                            <div className="company-name">
                                <h3>Smart Technologies</h3>
                                <h3>Calgary, Alberta</h3>
                            </div>
                            <h4>Designed and implemented features a collaborative whiteboard platform servicing thousands of users per day in EmberJS</h4>
                            <h4>Led web development of a project involving the end to end creation of a polished educational game shipped in Q1 2017</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}