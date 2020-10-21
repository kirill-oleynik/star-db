import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap.min.css';

class swapiService {
  _apiBase = 'https://swapi.dev/api';
  async getResource(url) {
    fetch(`${this._apiBase}${url}`)
    .then((response) => {
      if(!response.ok){
        console.log('COULD NOT FETCH')
      }else{
        return response.json()
      }
    })
    .then((body) => {console.log(body)})
  }
  getAllPeople() {
    this.getResource('/people/')
  }
  getPerson(id) {
    this.getResource(`/people/${id}`);
  }
}

const apiService = new swapiService();
apiService.getResource('/people/1/');
apiService.getAllPeople();
apiService.getPerson(1);
apiService.getPerson(2);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
