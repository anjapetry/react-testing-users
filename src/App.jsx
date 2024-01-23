import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdded = (user) => {
    setUsers([...users, user]);
  }


  return (
    <main>
    <UserForm  onUserAdded={onUserAdded} />
    <hr />
    <UserList users={users} />
    </main>
  )
}

export default App;
