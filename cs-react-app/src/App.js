const greeting = "Good afternoon";
const user = "my precious little peonies";

const ducky1 = 5;
const ducky2 = 7;

const leaf = {
  name: "Deanna",
  location: "Philly",
  activities: ["gardening", "gaming", "biking"],
};

const cat = {
  color: "greige",
  numKittens: 5,
  image:
    "https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg",
};

function App() {
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>

      <p>
        {ducky1} + {ducky2}={ducky1 + ducky2}
        <br></br>
        {ducky1} - {ducky2}={ducky1 - ducky2}
        <br></br>
        {ducky1} * {ducky2}={ducky1 * ducky2}
        <br></br>
        {ducky1} / {ducky2}={ducky1 / ducky2}
      </p>

      <p>
        My name is {leaf.name} and I live in {leaf.location}. Some things I
        enjoy are:
        <ul>
          <li>{leaf.activities[0]}</li>
          <li>{leaf.activities[1]}</li>
          <li>{leaf.activities[2]}</li>
        </ul>
      </p>

      <p>
        <img src={cat.image}></img>
        The image contains a {cat.color} cat with {cat.numKittens} kittens close by.
      </p>

      {/*just a random comment to myself*/}
    </div>
  );
}



export default App;
