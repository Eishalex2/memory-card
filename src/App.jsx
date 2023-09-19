import { useState } from 'react'
import './App.css'
import Deck from './components/deck';

function App() {
  const [picked, setPicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function nextTurn(pokeId) {
    setPicked([...picked, pokeId]);
    setCurrentScore(currentScore + 1);
    setShowModal(false);
  }

  function gameEnds() {
    setPicked([]);
    setCurrentScore(0);
    setShowModal(true)
  }

  function handleClick(pokeId) {
    if (picked.includes(pokeId) || picked.length === 12) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      gameEnds();
    } else {
      nextTurn(pokeId);
    }
  }

  return (
    <>
      <header>
        <p className='directions'>See how many you can get in a row without clicking the same pokemon twice!</p>
        <div className='scores'>
          <p>Best score: {bestScore}</p>
          <p>Current score: {currentScore}</p>
        </div>
      </header>

      <Deck
        handleClick={handleClick}
      />

      {showModal && <p className='game-over'>Game over! High score: {bestScore}</p>}
      
      <footer>
        <p>Pokemon images and info from <a href="https://pokeapi.co/" title="PokeAPI">Pokemon API</a></p>
        <p><a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Darius Dan - Flaticon</a></p>
      </footer>
    </>
  )
}

export default App
