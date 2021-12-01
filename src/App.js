import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  // const dummy = [{ name: "Aayush", age: 21 }];
  // const [users, setUsers] = useState([]);

  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
