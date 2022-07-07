import React,{Component} from 'react';
import Myclasshome from './Myclasshome';
class Myclass extends Component 
{
    constructor(props){
        super(props);
        this.state={name:"anuj",age:23}
    }
    //state={name:"anuj",age:23}
    updateData=()=>{
        this.setState({name:"anil"})
    }
  render(){
    return(
      <>
          <h2> My Class Component </h2>
          <ul>
            {this.props.myarr?.map((val,ind)=>
              <li key={ind}> {val}</li>
            )}
          </ul>
          <p> The name is {this.state.name} and age is {this.state.age}</p>
          <button onClick={this.updateData}> Click Here</button>
          <hr/>
          <Myclasshome empData={this.props.myempdata}/>
      </>
    )
  }
}
export default Myclass;