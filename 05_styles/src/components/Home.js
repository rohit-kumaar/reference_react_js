import React,{useState} from 'react';
function Home(props){
    const [count,setCount]=useState(0);
    const counter=()=>{
        setCount(count+1);
    }
    const pStyle={color:"red",border:"2px solid green"}
    return(
        <>
          <h2> Home Component</h2>
          <p>Welcome to {props.mytitle}</p>
          <p style={pStyle}> The counter is {count}</p>
          <button onClick={counter}> Click Here</button>
        </>
    )
}
export default Home;