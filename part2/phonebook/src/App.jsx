import { useState } from 'react'

const phoneNumbersArray = [
  {id: 1, name: 'Erik', phone: 1111111111 }, 
  {id: 2, name: 'Juan', phone: 1234567890 },
]

const App = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(phoneNumbersArray) //[ { id: 0, name: 'Arto Hellas', phone: 0, }]
  const [newName, setNewName] = useState('')

  const addNewEntry = (event) => {
    event.preventDefault();
    console.log('submiting new phone...')
    setPhoneNumbers(phoneNumbers.concat({id:phoneNumbers.length + 1, name:newName, phone:0}))
  }

  const handleNewEntry = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewEntry} value>
        <div>
          name: <input value={newName} onChange={handleNewEntry}/>
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {phoneNumbers.map(entry => <li key={entry.id}>{entry.name} : {entry.phone}</li>)}
      </div>
      ...
    </div>
  )
}

export default App