import React from "react";

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
                <h2>Name:{name}</h2>
                <h2>LoginID:{login}</h2>
            </div>
        )
    }
}

export default UserClass;

