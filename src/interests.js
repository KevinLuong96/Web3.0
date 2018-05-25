import React from "react";

export default class Interests extends React.Component {
    render() {
        return(
            <div className="interests">
                <h2 className="interests-header">I like to think that I'm a reasonably interesting human being. When I'm not working I like:</h2>
                <div className="interest">
                    <i class="fas fa-basketball-ball interest-icon"></i>
                    <h3>I love basketball, whether it be watching my hometown Raptors lose 😢, or just hooping at the local park.
                        I'm currently trying to improve my handles and jump shot to transition into that old man game.</h3>
                </div>
                <div className="interest">
                    <i class="fas fa-football-ball interest-icon"></i>
                    <h3>It's been a while since I've last played, and frankly I don't think I'll ever play again, but I love watching football.
                    During the season you can often catch me yelling at the TV on Sundays cheering for the Pats.</h3>
                </div>
            </div>
        )
    }
}