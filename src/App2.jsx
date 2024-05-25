import React, { useState } from 'react';
import './App.css';

function App() {
  const [mgaGwapo, setMgaGwapo] = useState([
    { id: 1, name: "Tito Santos", nickname: "Tito", specialty: "Charming Smile" },
    { id: 2, name: "Stern Lopez", nickname: "Stern", specialty: "Athletic Build" },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editedGwapo, setEditedGwapo] = useState({});

  const handleAddGwapo = () => {
    const nameInput = document.getElementById('nameInput').value;
    const nicknameInput = document.getElementById('nicknameInput').value;
    const specialtyInput = document.getElementById('specialtyInput').value;

    if (editMode) {
      const updatedGwapo = mgaGwapo.map(gwapo =>
        gwapo.id === editedGwapo.id
          ? { ...gwapo, name: nameInput, nickname: nicknameInput, specialty: specialtyInput }
          : gwapo
      );
      setMgaGwapo(updatedGwapo);
      setEditMode(false);
    } else {
      const newGwapo = {
        id: Date.now(),
        name: nameInput,
        nickname: nicknameInput,
        specialty: specialtyInput
      };
      setMgaGwapo(gwapo => [...gwapo, newGwapo]);
    }

    document.getElementById('nameInput').value = "";
    document.getElementById('nicknameInput').value = "";
    document.getElementById('specialtyInput').value = "";
  };

  const handleEditGwapo = (gwapo) => {
    setEditedGwapo(gwapo);
    setEditMode(true);
    document.getElementById('nameInput').value = gwapo.name;
    document.getElementById('nicknameInput').value = gwapo.nickname;
    document.getElementById('specialtyInput').value = gwapo.specialty;
  };

  const handleRemoveGwapo = (id) => {
    setMgaGwapo(gwapo => gwapo.filter(person => person.id !== id));
  };

  return (
    <div className="container">
      <h1>Mga Gwapo</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nickname</th>
            <th>Specialty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mgaGwapo.map(gwapo => (
            <tr key={gwapo.id}>
              <td>{gwapo.name}</td>
              <td>{gwapo.nickname}</td>
              <td>{gwapo.specialty}</td>
              <td>
                <button onClick={() => handleEditGwapo(gwapo)}>Edit</button>
                <button onClick={() => handleRemoveGwapo(gwapo.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="nameInput" />
        </div>
        <div className="input-group">
          <label htmlFor="nickname">Nickname:</label>
          <input type="text" id="nicknameInput" />
        </div>
        <div className="input-group">
          <label htmlFor="specialty">Specialty:</label>
          <input type="text" id="specialtyInput" />
        </div>
        <button onClick={handleAddGwapo}>{editMode ? "Update" : "Add Gwapo"}</button>
      </div>
    </div>
  );
}

export default App;
