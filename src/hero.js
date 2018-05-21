import React from "react";
import styled from "styled-components";

const HeroStyles = styled.div`
    width: 100%;
`;

const Background = styled.img`
    width:100%;
`;

export default class Hero extends React.Component {
    render() {
        return (
            <HeroStyles>
                <Background src="./img/nyc.jpg"></Background>
            </HeroStyles>
        )
    }
}