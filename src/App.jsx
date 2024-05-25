import { useState } from 'react';
import './App.css';

function App() {
  const [girlFriends, setGirlFriends] = useState([
    "Tito", "Stern", "Alejandro"
  ]);
  
  function handleAddGF() {
    const gfInput = document.getElementById('gfInput').value.trim();
    if (gfInput) {
      setGirlFriends(gf => [...gf, gfInput]);
      document.getElementById('gfInput').value = "";
    }
  }

  function handleRemoveGF(index) {
    setGirlFriends(girlFriends.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>gwapo sa MDC</h1>
      <ul>
        {girlFriends.map((gf, index) => (
          <li key={index} className="item" onClick={() => handleRemoveGF(index)}>
            {gf}
          </li>
        ))}
      </ul>
      <input type="text" id="gfInput" placeholder="Input Palautog" />
      <button onClick={handleAddGF}>Add Gwapo</button>
    </div>
  );
}

export default App;
