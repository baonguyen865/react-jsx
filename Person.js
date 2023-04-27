const Person = ({ name, age, hobbies }) => {
    const vote = age >= 18 ? "Go Vote" : "Go Study"
    const hobbiesList = hobbies.map(h => <li>{h}</li>)

    return (
        <div>
            <p>Learm some information about this person:</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesList}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}