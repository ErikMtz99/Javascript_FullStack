import { useState } from 'react'

const phoneNumbersArray = [
  {id: 1, name: 'Erik', phone: 1111111111 }, 
  {id: 2, name: 'Juan', phone: 1234567890 },
]

const App = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(phoneNumbersArray)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('0000000000')
  let foundPhoneNumbers = []

  const addNewEntry = (event) => {
    event.preventDefault();
    if((phoneNumbers.filter((number) => number.name === newName)).length === 0) // if newName is not in array (new array lenght is zero because there is no match)
    {
      console.log('submiting new person...')
      setPhoneNumbers(phoneNumbers.concat({id:phoneNumbers.length + 1, name:newName, phone:newNumber}))
    }
    else { // if newName is already in array
      alert(`${newName} is already added to phonebook`)
    }
    
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
    console.log('name ' + event.target.value);
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
    console.log('number ' + event.target.value);
  }
  const handleFilterName = (event) => {
    setNewName(event.target.value);
    console.log('filtering name  ' + event.target.value);
  }

  const FilterPerson = () => {
    foundPhoneNumbers = phoneNumbers.filter(value => (value.name).toLowerCase() === newName.toLowerCase())
    return(
      <div>
        {foundPhoneNumbers.map(entry => <li key={entry.id}>{entry.name} : {entry.phone}</li>)}
      </div>
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2> Search phonebook by name: </h2>
      <div>
        Enter name to search: <input value={newName} onChange={handleFilterName}/>
        <FilterPerson> List: </FilterPerson>
      </div>
      <h2> Add new: </h2>
      <form onSubmit={addNewEntry} value>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
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