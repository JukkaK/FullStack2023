import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import axios from 'axios'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    console.log('effect')
    personService
    .getAll()
    .then(InitialPersons => {
      setPersons(InitialPersons)
    })
  }, [])
  console.log('render', persons.length, 'persons')

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      });
    }
  }

  const addName = (event) => {
    event.preventDefault()
    const personNameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    personService
      .create(personNameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

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

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  // const Persons = ({ person, deletePerson }) => {
  //   return (
  //     <li>
  //       {person.name} {person.number}
  //       <button onClick={() => deletePerson(person.id)}>Delete</button>
  //     </li>
  //   )
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
          <Persons key={person.id} person={person} deletePerson={deletePerson} />
        )}
      </ul>       
    </div>
  )
}

export default App

