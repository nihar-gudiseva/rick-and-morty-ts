import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CharacterList from './components/character-list/character-list';
import CharacterInfo from './components/character-info/character-info';

const routes = (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<CharacterList/>}></Route>
        <Route path="/:id" element={<CharacterInfo/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("root"));
