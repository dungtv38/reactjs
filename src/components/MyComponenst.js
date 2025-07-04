import React, { useState } from "react";
import Useinfor from "./Useinfor";
import Displayinfor from "./Displayinfor";

const MyComponent = () => {
  const [listuser, setListuser] = useState([
    { id: 1, name: "gfh", age: "30" },
    { id: 2, name: "gfh", age: "30" },
    { id: 4, name: "gfh", age: "30" },
  ]);

  const handsumbituser = (userobj) => {
    const newUser = {
      ...userobj,
      id: Math.floor(Math.random() * 10000),
    };
    setListuser([newUser, ...listuser]);
  };

  const handleDelete = (userId) => {
    const updatedList = listuser.filter((item) => item.id !== userId);
    setListuser(updatedList);
  };

  return (
    <>
      <Useinfor handsumbituser={handsumbituser} />
      <br />
      <Displayinfor listuser={listuser} handleDelete={handleDelete} />
    </>
  );
};

export default MyComponent;
