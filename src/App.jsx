import { useState } from 'react'
import './App.css'
import Deck from './components/deck';

function App() {
  const [picked, setPicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  function nextTurn(pokeId) {
    setPicked([...picked, pokeId]);
    setCurrentScore(currentScore + 1);
  }

  function gameEnds() {
    setCurrentScore(0);
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      setPicked([]);
    }
  }

  function handleClick(pokeId) {
    if (picked.includes(pokeId)) {
      console.log("Game ends");
      gameEnds();
    } else {
      nextTurn(pokeId);
    }
  }

  return (
    <>
      <div className='scores'>
        <p>Best score: {bestScore}</p>
        <p>Current score: {currentScore}</p>
      </div>
      <Deck
        handleClick={handleClick}
      />
    </>
  )
}

export default App
