import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then (response => {
          console.log('promise fulfilled')
          setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  // const promise2 = axios.get('http://localhost:3001/foobar')
  // console.log(promise2)

  const addName = (event) => {
    event.preventDefault()
    const personNameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    axios
      .post('http://localhost:3001/persons', personNameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    }

  // const addName2 = (event) => {
  //   event.preventDefault()
  //   const nameObject = {
  //     id: persons.length + 1,
  //     name: newName,
  //     number: newNumber            
  //   }
  //   console.log(JSON.stringify(nameObject.name))
  //   if (persons.some(person => person.name === newName)) {      
  //     alert(`${newName} already added.`)
  //   } else {
  //     setPersons(persons.concat(nameObject))
  //     setNewName('')
  //     setNewNumber('')
  //   }

  //}

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

