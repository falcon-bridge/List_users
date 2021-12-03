import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const nameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   if (enteredUsername.trim().length <= 0 || enteredAge.trim().length <= 0) {
  //     setError({
  //       title: "Invalid input !",
  //       message: "Please enter a valid name and age (non-empty values)",
  //     });
  //     return;
  //   }
  //   if (+enteredAge < 1) {
  //     setError({
  //       title: "Invalid age !",
  //       message: "Please enter a valid age ( > 0)",
  //     });
  //     return;
  //   }
  //   props.onAddUser(enteredUsername, enteredAge);
  //   setEnteredAge("");
  //   setEnteredUsername("");
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const nameInput = nameRef.current.value;
    const ageInput = ageRef.current.value;
    if (nameInput.trim().length <= 0 || ageInput.trim().length <= 0) {
      setError({
        title: "Invalid input !",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: "Invalid age !",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    props.onAddUser(nameInput, ageInput);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameRef}
          ></input>
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
