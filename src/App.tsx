import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './app/components/Navigation/Navigation';
import './app/assets/fonts/index.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, my sweet little Maj
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
