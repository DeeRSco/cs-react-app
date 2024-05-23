import users from "./users.json";
import todos from "./todos.json";
console.log(users);
console.log(todos);

const greeting = "Welcome to React";
const user = "Cohort 2024";

function App() {
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>

      <Users />
      <Todos />
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      
      {users.map((user) => (
        <div>
          <h3>{user.name}</h3>
          <p>Email:</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
          <p>Address: </p>
          <address>
            <p>
              {user.address.street} {user.address.suite}
            </p>
            <p>
              {user.address.city} {user.address.zipcode}
            </p>
          </address>
          <p>Company:</p>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </div>
      ))}
    </div>
  )
  
};

function Todos() {
  return (<div>
    <h2>To Dos</h2>
    {todos.map((todo)=> (
      <div>
        <p>To Do: {todo.title}</p>
        <p>Status: {todo.completed ? "Completed" : "In progress"}</p>
      </div>
    ))}
  </div>);
}

export default App;
