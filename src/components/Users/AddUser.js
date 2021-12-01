import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  //   const [username, setUsername] = useState("");
  //   const [age, setAge] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (in years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
