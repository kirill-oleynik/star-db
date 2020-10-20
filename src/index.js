import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const getResource = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((body) => { console.log(body.name) })
}
getResource('https://swapi.dev/api/people/1/')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
