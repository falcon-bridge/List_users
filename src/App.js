import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  // const dummy = [{ name: "Aayush", age: 21 }];
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => [
      ...prevUserList,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
