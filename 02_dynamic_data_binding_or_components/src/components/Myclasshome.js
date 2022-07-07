import React, { Component } from 'react'

export default class Myclasshome extends Component {
    constructor(props){
        super(props);
        this.state={fname:''}
    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    onload=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
     <>
       <h3> My class home component</h3>
       <form onSubmit={this.onload}>
        Name : <input type="text" name="fname" onChange={this.handler}/> <br/>
        <input type="submit" value="submit"/>
        </form>
       <ul>
          {this.props.empData.map((emp)=>
          <li key={emp.id}>
             {emp.name}
          </li>)}
       </ul>
     </>
    )
  }
}
