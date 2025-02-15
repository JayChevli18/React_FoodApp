import React from "react";
import {UserContext} from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"default",
                login:"default"
            }
        }
        console.log("Parent Constructor!");
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/JayChevli18");
        const json=await data.json();

        this.setState({
            userInfo:json,
        })        
    }

    componentDidUpdate(){
        console.log("Component did update!");
    }

    render(){
        const {name, login}=this.state.userInfo;
        return(
            <div className="user-card">
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                <h2>Name:{name}</h2>
                <h2>LoginID:{login}</h2>
            </div>
        )
    }
}

export default UserClass;

