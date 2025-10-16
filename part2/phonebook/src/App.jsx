import { useState } from 'react'

const phoneNumbersArray = [
  {id: 1, name: 'Erik', phone: 1111111111 }, 
  {id: 2, name: 'Juan', phone: 1234567890 },
]

const FilterPerson = (props) => {
    let foundPhoneNumbers = []
    foundPhoneNumbers = props.phoneNumbers.filter(value => (value.name).toLowerCase() === props.newName.toLowerCase())
    return(
      <div>
        Enter name to search: <input value={props.newName} onChange={props.filterFunc}/>
        {foundPhoneNumbers.map(entry => <li key={entry.id}>{entry.name} : {entry.phone}</li>)}
      </div>
    )
  }

const PersonForm = (props) => {
    return (
      <div>
        <form onSubmit={props.addNewEntry} value>
        <div>
          name: <input value={props.newName} onChange={props.handleNewName}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
    )
  }

  const ShowPersons = (props) => {
    return (
      <div>
        {props.phoneNumbers.map(entry => <li key={entry.id}>{entry.name} : {entry.phone}</li>)}
      </div>
    )
  }

const App = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(phoneNumbersArray)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('0000000000')
  

  const addNewEntry = (event) => {
    event.preventDefault();
    if((phoneNumbers.filter((number) => number.name.toLowerCase() === newName.toLowerCase())).length === 0) // if newName is not in array (new array lenght is zero because there is no match)
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

  return (
    <div>
      <h1>Phonebook</h1>

      <h2> Search phonebook by name: </h2>
      <FilterPerson phoneNumbers = {phoneNumbers} newName = {newName} filterFunc = {handleFilterName}/>

      <h2> Add new: </h2>
      <PersonForm newName = {newName} newNumber = {newNumber} handleNewNumber = {handleNewNumber} handleNewName ={handleNewName} addNewEntry = {addNewEntry}/>

      <h2>Numbers</h2>
      <ShowPersons phoneNumbers={phoneNumbers}/>

    </div>
  )
}

export default App