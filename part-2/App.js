
const App = () => (
    <div>
        <Tweet username="FinnDog" name="Finn" date= "June 14, 2022" message="Hi Maggie"/>
        <Tweet username="MaggieDog" name="Maggie" date= "June 14, 2022" message="Hi Finn" />
        <Tweet username="FinnDog" name="Finn"  date= "June 14, 2022" message="Wanna play?" />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))
