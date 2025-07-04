
import React from "react";
import "./Displayinfor.scss";


const Displayinfor =(props)=>{
   
    const { listuser } = props;
    return (
      <div className="display-wrapper">
        {listuser.map((user,index) => (
          <div className="user-item" key={user.id}>
            <div className="user-name">Name: {user.name}</div>
            <div className="user-age">Age: {user.age}</div>
            <button onClick={() =>props.handleDelete(user.id)}>X</button>
          </div>
        ))}
      </div>
    );


}

export default Displayinfor;

