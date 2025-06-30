import React from "react";
import Useinfor from "./Useinfor";


class MyComponenst extends React.Component{

    state = {
        name: 'dung',
        age:258
    }
    handclick=(event)=>{
        console.log("sdjfgj",this.state.name);
    }

    handonchangeinput = (event)=>{
        this.setState({
            name:event.target.value
        })

    }
     handonchangeeage = (event)=>{
        this.setState({
            age:event.target.value
        })

    }
    handonsumbit=(event)=>{
            alert('sdjhfg');
    }
    render(){

        return(

            <div>
                mmy name is {this.state.name} and {this.state.age}
                <button onClick={(event)=>this.handclick(event)}> clickme</button>



                <form onSubmit={(event)=>this.handonsumbit(event)}>
                    <label>your nảme</label>
                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={(event)=>this.handonchangeinput(event)}>
                    </input>


                     <label>your age</label>
                    <input 
                    type="text"
                    value={this.state.age}
                    onChange={(event)=>this.handonchangeeage(event)}>
                    </input>
                    <button>sumbit</button>
                </form>
                <Useinfor/>
            </div>

        );
    }
}

export default MyComponenst;