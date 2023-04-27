const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Bao" />
        <Tweet username="killerqueen13" name="Kyle Manacek" date="7-4-2021" message="This is the land of the free" />
        <Tweet username="faker123" name="Ryan Murphy" date="1-1-2022" message="Happy New Year!" />
        <Tweet username="thehulk12" name="Chris Lavin" date="12-25-2020" message="Merry Christmas!" />
        <Person
            name="Homer"
            age={38}
            hobbies={["bowling", "watching tv", "drinking beer"]}
        />
        <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
        <Person
            name="Bart"
            age={10}
            hobbies={["skateboarding", "making prank calls"]}
        />
        <Person
            name="Lisa"
            age={8}
            hobbies={["reading", "saxophone", "eating vegetables"]}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))