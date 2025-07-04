import React, { useState } from "react";

const UseInfor = (props) => {
  const [name, setName] = useState("dung");
  const [age, setAge] = useState(258);

  const handleClick = () => {
    console.log("Name:", name);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handsumbituser({
      name,
      age,
    });
  };

  return (
    <>
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>

      <form onSubmit={handleSubmit}>
        <label>Your name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Your age:</label>
        <input type="number" value={age} onChange={handleAgeChange} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseInfor;
