const Persons = ({ persons,search }) => {
    const numbersToShow = (search === '')? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
        {numbersToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
        </div>
    )
}
export default Persons