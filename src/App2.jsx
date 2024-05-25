import React, { useState } from 'react';
import './App.css';

function App() {
  const [phubPersonalities, setPhubPersonalities] = useState([
    { id: 1, name: "Lexi Llore", stageName: "LLore", specialty: "Deepthroat" },
    { id: 2, name: "Miya Khalifa", stageName: "Khalifa", specialty: "Big Cock" },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editedPersonality, setEditedPersonality] = useState({});

  const handleAddPersonality = () => {
    const nameInput = document.getElementById('nameInput').value;
    const stageNameInput = document.getElementById('stageNameInput').value;
    const specialtyInput = document.getElementById('specialtyInput').value;

    if (editMode) {
      const updatedPersonalities = phubPersonalities.map(personality =>
        personality.id === editedPersonality.id
          ? { ...personality, name: nameInput, stageName: stageNameInput, specialty: specialtyInput }
          : personality
      );
      setPhubPersonalities(updatedPersonalities);
      setEditMode(false);
    } else {
      const newPersonality = {
        id: Date.now(),
        name: nameInput,
        stageName: stageNameInput,
        specialty: specialtyInput
      };
      setPhubPersonalities(personalities => [...personalities, newPersonality]);
    }

    document.getElementById('nameInput').value = "";
    document.getElementById('stageNameInput').value = "";
    document.getElementById('specialtyInput').value = "";
  };

  const handleEditPersonality = (personality) => {
    setEditedPersonality(personality);
    setEditMode(true);
    document.getElementById('nameInput').value = personality.name;
    document.getElementById('stageNameInput').value = personality.stageName;
    document.getElementById('specialtyInput').value = personality.specialty;
  };

  const handleRemovePersonality = (id) => {
    setPhubPersonalities(personalities => personalities.filter(personality => personality.id !== id));
  };

  return (
    <div className="container">
      <h1>Top PHub Personalities</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stage Name</th>
            <th>Specialty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {phubPersonalities.map(personality => (
            <tr key={personality.id}>
              <td>{personality.name}</td>
              <td>{personality.stageName}</td>
              <td>{personality.specialty}</td>
              <td>
                <button onClick={() => handleEditPersonality(personality)}>Edit</button>
                <button onClick={() => handleRemovePersonality(personality.id)}>Remove</button>
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
          <label htmlFor="stageName">Stage Name:</label>
          <input type="text" id="stageNameInput" />
        </div>
        <div className="input-group">
          <label htmlFor="specialty">Specialty:</label>
          <input type="text" id="specialtyInput" />
        </div>
        <button onClick={handleAddPersonality}>{editMode ? "Update" : "Add Personality"}</button>
      </div>
    </div>
  );
}

export default App;
