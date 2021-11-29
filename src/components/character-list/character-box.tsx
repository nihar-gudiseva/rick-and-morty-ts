import React from 'react';
import {Link} from 'react-router-dom'

function CharacterBox(character: any) {
    //Renders the individual character box
    console.log(character);
    return (
        <div>
            <Link to={{
                pathname: `/${character.element.id}`
            }}>
            <img src={character.element.image} alt=""></img>
            <p>ID: {character.element.id}</p>
            <p>Name: {character.element.name}</p>
            <p>Location: {character.element.location.name}</p>
            <br></br>
            </Link>
            <br></br>
        </div>
    );
}

export default CharacterBox;