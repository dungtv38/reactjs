import React from "react";
import Useinfor from "./Useinfor";
import Displayinfor from "./Displayinfor";


class MyComponenst extends React.Component{
    state = {
       listuser: [
        {id: 1, name:"gfh", age: "30"},
         {id: 2, name:"gfh", age: "30"},
          {id: 4, name:"gfh", age: "30"}
    ]
    }

    render(){
        

        return(

            <div>
                
                <Useinfor/>

                <br/>
                <Displayinfor listuser={this.state.listuser}
                user={this.state.listuser}
                />

            </div>

        );
    }
}

export default MyComponenst;