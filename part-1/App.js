
// App: renders a div with instances of the other two components.
const App = () => (
    <div>
        <FirstComponent/>
        <NamedComponent name="Finn"/>
    </div>
)
// function App(){
//     return (
//         <div>
//             <FirstComponent/>
//             <NamedComponent name="Finn"/>
//         </div>
// )}
ReactDOM.render(<App/>, document.getElementById("root"))
