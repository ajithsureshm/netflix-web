import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {FirebaseContext} from "./store/FirebaseContext";
import firebase from './firebase/config'
import Context from './store/FirebaseContext'

import App from './App';
import './index.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>

      <Context>

      <App />

      </Context>
      
    </FirebaseContext.Provider>
  </React.StrictMode>
);
