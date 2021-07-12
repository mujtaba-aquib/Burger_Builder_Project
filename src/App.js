import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent.js'

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (
    <div className="page-container">
      <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
