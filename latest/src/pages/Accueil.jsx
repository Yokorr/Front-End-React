import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bonjour from './Bonjour'
import Mybouton from './Mybouton';
import Formulaire from '../components/Formulaire'

function App() {
  const AlerteClic = () => {
    alert('Le bouton a été cliqué !');
  };
  return (
    <div style={{ paddingTop: '400px' }}>
      <Bonjour />
      <br />
      <h1>Mon TP React</h1>
      <Mybouton 
        label="Valider" 
        onClick={AlerteClic} 
      />
    </div>
  );
}

export default App;
  