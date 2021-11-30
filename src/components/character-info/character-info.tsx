import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom'

interface CharacterDetails {
    id: number,
    name: string, 
    image: string, 
    species: string, 
    gender: string, 
    status: string, 
    location: {
        name: string
    },
    episode: {
    }
}

function CharacterInfo() {
    //Renders the page with all the character information
    const characterId = useParams();
    const [character, setCharacter] = useState<null | CharacterDetails>(null);

    useEffect(() => {
        getCharacter();
    }, [])

    function getCharacter() {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId.id}`)
            .then((response) => {
                setCharacter({...response.data, id: characterId.id})
            });
    }

    const [charLocation, setCharLocation] = useState([]);

    useEffect(() => {
        getCharLocation();
    }, [])

    function getCharLocation() {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then((response) => {
                setCharLocation(response.data.results)
            });
    }

    if(character) {
        return(
            <SplashPage>
                <StyledLink to={{pathname: `/`}}>
                <StyledButton>Return to Search</StyledButton>
                </StyledLink>
                <FullCharacterInformation>
                <img src={character.image} alt=""></img>
                <h2>{character.name}</h2>
                <h4>Location</h4>
                <p>{character.location.name}</p>
                <h4>Species</h4>
                <p>{character.species}</p>
                <h4>Gender</h4>
                <p>{character.gender}</p>
                <h4>Living Status</h4>
                <p>{character.status}</p>
                <h4>Episodes Seen In</h4>
                <p>{Object.keys(character.episode).length}</p>
                </FullCharacterInformation>
                <br></br>
                <p>Near: </p>
                <br></br>
                <div>
                    {charLocation.filter((element: CharacterDetails) => element.location.name === character.location.name && element.id != character.id)
                        .map((element: CharacterDetails) => 
                        <div>
                            <StyledLink to={{pathname: `/${element.id}`}}>
                            <SingleCharacterBox>
                            <img src={element.image} alt=""></img>
                            <TextStyle>
                            <h2><b>{element.name}</b></h2>
                            <h4>{element.location.name}</h4>
                            </TextStyle>
                            </SingleCharacterBox>
                            </StyledLink>
                            <br></br>
                        </div>
                    )}
                </div>
            </SplashPage>
        );
    }
    return null;
}

const SplashPage = styled.div`
    color: black;
    padding: 10px;
    margin-left: 10px;
`;

const StyledButton = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 7px;
    background-color: #F9F7F5;
    filter: drop-shadow(2px 3px 4px #7f7f7f);
`;

const FullCharacterInformation = styled.div`
    position: relative;
    background-color: #F9F7F5;
    color: black;
    border-radius: 0.5rem;
    padding: 0.5vw;
    height: 50rem;
    width: 40rem;
    filter: drop-shadow(5px 10px 7px #7f7f7f);
`;

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

export default CharacterInfo;
