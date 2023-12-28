import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('');

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber            
    }
    console.log(JSON.stringify(nameObject.name))
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    if (persons.some(person => person.name === newName)) {      
      alert(`${newName} already added.`)
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} onChange={handleNameFilterChange} />
      <div>debug: {nameFilter}</div>
      <PersonsForm 
        onSubmit={addName} 
        name={newName} 
        handleNameChange={handleNameChange} 
        number={newNumber} 
        handleNumberChange={handleNumberChange} 
      /> 
      <h2>Numbers</h2>      
      <ul>
        {namesToShow.map(person =>
          <Persons key={person.id} person={person} />
        )}
      </ul>      
    </div>
  )
}

export default App

