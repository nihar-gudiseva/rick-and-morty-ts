import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
