import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MovieStore } from './store/MovieStore';
import { StoreProvider } from './context/StoreContext';


const movieData = new MovieStore([])

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={movieData}>
    <App />
  </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
