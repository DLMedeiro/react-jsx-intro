// NamedComponent: renders a p that should accept a property of “name” and display text “My name is name”.

function NamedComponent(props) {
    return <p> My name is {props.name} </p>
}

// ReactDOM.render(<NamedComponent/>, document.getElementById("root"))