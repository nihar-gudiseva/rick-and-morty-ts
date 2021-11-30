import React from 'react';
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';

function CharacterBox(character: any) {
    //Renders the individual character box
    return (<div>
            <StyledLink to={{pathname: `/${character.element.id}`}}>
            <SingleCharacterBox>
            <img src={character.element.image} alt=""></img>
            <TextStyle>
            <h2><b>{character.element.name}</b></h2>
            <h4>{character.element.location.name}</h4>
            </TextStyle>
            </SingleCharacterBox>
            </StyledLink>
            <br></br>
        </div>
    );
}

const StyledLink = styled(Link)`
  text-decoration: none
`;

const SingleCharacterBox = styled.div`
    position: relative;
    background-color: #F9F7F5;
    color: black;
    border-radius: 0.5rem;
    padding: 0.5vw;
    height: 18.8rem;
    width: 40rem;
    filter: drop-shadow(5px 10px 7px #7f7f7f);
`;

const TextStyle = styled.div`
    position: relative;
    left: 315px;
    bottom: 200px;
`;

export default CharacterBox;
