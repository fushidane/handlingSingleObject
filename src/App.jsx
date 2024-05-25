import { useState } from 'react'
import './App.css'

function App() {
  // const [ person, setPerson ] = useState({
  //   name: 'Christoper Sab',
  //   address: 'Ilijan Sur, Tubigon, Bohol',
  //   sex: 'Male',
  //   age: 5
  // })

  // function handleNameChange(event){
  //   setPerson(p =>({...p, name: event.target.value}))
  // }
  // function handleAddressChange(event){
  //   setPerson(p =>({...p, address: event.target.value}))
  // }
  // function handleSexChange(event){
  //   setPerson(p =>({...p, sex: event.target.value}))
  // }
  // function handleAgeChange(event){
  //   setPerson(p =>({...p, age: event.target.value}))
  // }

  // return (
  //   <div>
  //     <h1>Persona 2</h1>
  //     <table>
  //       <tbody>
  //         <tr>
  //           <th>Name: </th><td>{person.name}</td>
  //         </tr>
  //         <tr>
  //           <th>Address: </th><td>{person.address}</td>
  //         </tr>
  //         <tr>
  //           <th>Sex: </th><td>{person.sex}</td>
  //         </tr>
  //         <tr>
  //           <th>Age: </th><td>{person.age}</td>
  //         </tr>
  //       </tbody>
  //     </table>

  //     <hr />

  //     <div>
  //       <div className="input-group">
  //         <label htmlFor="name">Name: </label>
  //         <input type="text" name="name" id="name" value={person.name} onChange={handleNameChange}/>
  //       </div>
  //       <div className="input-group">
  //         <label htmlFor="address">Address: </label>
  //         <input type="text" name="address" id="address" value={person.address} onChange={handleAddressChange}/>
  //       </div>
  //       <div className="input-group">
  //         <label htmlFor="sex">Sex: </label>
  //         <input type="text" name="sex" id="sex" value={person.sex} onChange={handleSexChange}/>
  //       </div>
  //       <div className="input-group">
  //         <label htmlFor="age">Age: </label>
  //         <input type="text" name="age" id="age" value={person.age} onChange={handleAgeChange}/>
  //       </div>
  //     </div>
  //   </div>
  // )

  const [girlFriends, setGirlFriends] = useState([
    "Lexi Llore", "Miya Khalifa", "Tanya Nigga"
  ])
  
  function handleAddGF(){
    const gfInput = document.getElementById('gfInput').value;

    setGirlFriends(gf => [...gf, gfInput])

    document.getElementById('gfInput').value = " "
  }

  function handleRemoveGF(index){
    setGirlFriends(girlFriends.filter((el,i)=>i !== index))
  }
  return (
    <div>
      <h1>Top PHub Personalities</h1>
      <ul>
        {girlFriends.map((gf, index)=> <li key={index} className='item' onClick={()=>handleRemoveGF(index)}>{gf}</li>)}
      </ul>
      <input type="text" id="gfInput" placeholder='Input Palautog'/>
      <button onClick={handleAddGF}>Add Uwagan</button>
    </div>
  )
}

export default App
