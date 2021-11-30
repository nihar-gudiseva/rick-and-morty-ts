import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterBox from './character-box';
import styled from '@emotion/styled';

interface Character {
    name: string
}

function CharacterList() {
    //Renders the full list of characters as well as the necessary components (search bar, buttons, etc.)
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
            <SplashPage>
            <h1>Character Explorer</h1>
            <SearchBar type="text" placeholder="Search" onChange={(event) => {
                setSearch(event.target.value);
            }}></SearchBar>
            <StyledText>x results</StyledText>
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
            <StyledButton>Previous</StyledButton><StyledButton>Next</StyledButton>
            <StyledText>Page 1 of X</StyledText>
            </SplashPage>
        </div>
    )
}

const SplashPage = styled.div`
    padding: 10px;
    margin-left: 10px;
`;

const SearchBar = styled.input`
    margin-bottom: 20px;
    padding-left: 7px;
    border-radius: 4px;
`;

const StyledButton = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 550px;
    border-radius: 7px;
    background-color: #F9F7F5;
    filter: drop-shadow(2px 3px 4px #7f7f7f);
`;

const StyledText = styled.p`
    margin-left: 300px;
    color: #909090;
`;

export default CharacterList;
