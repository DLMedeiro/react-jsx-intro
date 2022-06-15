
const App = () => (
    <div>
        <Person name="Bob" age="42" hobbies = {['Fishing', 'Reading', 'Watching TV']}/>
        <Person name="MaggieWhiteDog" age="6" hobbies = {['Eating', 'Sun bathing', 'De squeeking toys']}/>
        <Person name="FinnBlackDog" age="6" hobbies = {['Bird Watching', 'hiking', 'Being a cat']}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))
