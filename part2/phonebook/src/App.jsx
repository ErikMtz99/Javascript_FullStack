import { useEffect, useState } from 'react'
import axios from 'axios'
import personsService from './services/persons'

const FilterPerson = (props) => {
    let foundPhoneNumbers = []
    foundPhoneNumbers = props.phoneNumbers.filter(value => (value.name).toLowerCase() === props.newName.toLowerCase())
    return(
      <div>
        Enter name to search: <input value={props.newName} onChange={props.filterFunc}/>
        {foundPhoneNumbers.map(entry => <li key={entry.id}>{entry.name} : {entry.number}</li>)}
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
        {props.phoneNumbers.map(entry => 
          <li key={entry.id}>{entry.name} : {entry.number}
            <button onClick={() => props.deletePerson(entry.id, entry.name)}>delete</button> 
          </li>)}

      </div>
    )
  }

const App = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('0000000000')
  
  useEffect(() => {
    console.log('effect')
    personsService.getAll().then((response) => {setPhoneNumbers(response)})
    //axios.get('http://localhost:3001/persons').then(response => {setPhoneNumbers(response.data)}) 
  }, []) //effect only run after 1st component's render
  

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      id:phoneNumbers.length + 1,
      name:newName,
      number:newNumber,
    }

    if((phoneNumbers.filter((number) => number.name.toLowerCase() === newName.toLowerCase())).length === 0) // if newName is not in array (new array lenght is zero because there is no match)
    {
      console.log('submiting new person...')
      personsService.create(personObject).then((returnedPerson) => {
        setPhoneNumbers(phoneNumbers.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      
    }
    else { // if newName is already in array
      alert(`${newName} is already added to phonebook`)
    }
    
  }

  const deletePerson = (id, name) => {
    if(confirm(`Do you want to delete ${name} ${id}?`)){
      personsService.deleteEntry(id).then(() => {
        setPhoneNumbers(phoneNumbers.filter((person) => person.id !== id))
        alert(`${name} has been deleted from phonebook`)
      })
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
      <PersonForm newName = {newName} newNumber = {newNumber} handleNewNumber = {handleNewNumber} handleNewName ={handleNewName} addNewEntry = {addPerson}/>

      <h2>Numbers</h2>
      <ShowPersons phoneNumbers={phoneNumbers} deletePerson={deletePerson}/>

    </div>
  )
}

export default App