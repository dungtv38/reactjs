import React from "react";


class Displayinfor extends React.Component{

    render(){
        const {listuser} = this.props
        console.log(listuser)
        return(

            <div>
                {listuser.map((user,index)=>{
                    return(
                     <div key={user.id}>
                        <div>naem {user.name}</div>      

                     </div>   
                    )
                })}
                 
            </div>
        )
    }
}
export default Displayinfor;