import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterBox from './character-box';

interface Character {
    name: string
}

function CharacterList() {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, [])

    function getCharacters() {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then((response) => {
                setCharacters(response.data.results)
            });
    }

    return (
        <div>
            <p>Character Explorer</p>
            <div><input type="text" placeholder="Search" onChange={(event) => {
                setSearch(event.target.value);
            }}></input></div>
            <br></br>
            <div>{characters.filter((value: Character) =>{
                if(search===""){
                    return value;
                }
                else if(value.name.toLowerCase().includes(search.toLowerCase())) {
                    return value;
                }
                else {
                    return null;
                }
            }).map((element: any) => <div>{CharacterBox({element})}</div>)}</div>
        </div>
    )
}

export default CharacterList;