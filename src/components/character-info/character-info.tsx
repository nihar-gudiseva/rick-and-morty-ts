import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

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
            <div>
                <img src={character.image} alt=""></img>
                <p>{character.name}</p>
                <p>Location: {character.location.name}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Living Status: {character.status}</p>
                <p>Episodes Seen In: {Object.keys(character.episode).length}</p>
                <br></br>
                <p>Near: </p>
                <br></br>
                <div>
                    {charLocation.filter((element: CharacterDetails) => element.location.name === character.location.name && element.id != character.id)
                        .map((element: CharacterDetails) => <div>
                            <img src={element.image} alt=""></img>
                            <p>ID: {element.id}</p>
                            <p>Name: {element.name}</p>
                            <p>Location: {element.location.name}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return null;
}

export default CharacterInfo;