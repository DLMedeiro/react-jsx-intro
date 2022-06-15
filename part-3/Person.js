// Create a component called Person. Inside of this component, render a p tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your Person component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an li.

// Add an App component that renders at least three copies of the Person component on the page.

const Person = (props) => {
    const h3Text = props.age > 18 ? "Please go Vote!" : "Sorry you must be 18 to vote"

    return (
        <div>
            <p> Learn some informaiton about this person </p>
            <h3>Name: {props.name.slice(0,6)}</h3>
            <h3>Age: {props.age}</h3>
            <h3>{h3Text}</h3>
            <h3>Hobbies</h3>
                <ul> {props.hobbies.map(h => (
                    <li>{h}</li>
                ))}
                </ul>
        </div>
    )
}