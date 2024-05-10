import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Dean Ambrose', number: '39-44-5323523' },
    { name: 'Gary Kirsten', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const addContact = (event) => {
    event.preventDefault()
    if(newName === '') {
      alert('Name cannot be empty')
      return
    }
    if(newNumber === '') {
      alert('Number cannot be empty')
      return
    }
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({name: newName, number: newNumber}))
  }

  const applyFilter = (event) => {
    setSearch(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter applyFilter={applyFilter}/>
      <h2>Add a new</h2>
      <PersonForm addContact={addContact} handleNameChange={handleNameChange} handleNumChange={handleNumChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search = {search}/>
    </div>
  )
}

export default App