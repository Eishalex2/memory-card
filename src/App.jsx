import { useEffect, useState } from 'react'
import './App.css'
import Deck from './components/deck';

function App() {
  const [picked, setPicked] = useState([])

  function nextTurn(pokeId) {
    setPicked([...picked, pokeId]);
  }

  function handleClick(pokeId) {
    if (picked.includes(pokeId)) {
      console.log("Game ends");
    } else {
      nextTurn();
    }
  }

  return (
    <>
      <Deck
        handleClick={() => console.log("clicked")}
      />
    </>
  )
}

export default App
