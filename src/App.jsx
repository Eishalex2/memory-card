import { useEffect, useState } from 'react'
import './App.css'

const monNumbers = [1, 10, 20, 30, 40];

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function getCats() {
      const response = await fetch('https://cataas.com/api/cats');
      const data = await response.json();
      console.log(data);

    }
    getCats();
  });

  return (
    <>

    </>
  )
}

export default App
