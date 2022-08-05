import React, { Component } from 'react'

export default class Mydata extends Component {
    constructor(props){
        super(props);
        this.state={post:[]}
    }
    componentDidMount(){
        const API="https://jsonplaceholder.typicode.com/posts";
        fetch(API)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            this.setState({post:data})
        })
        .catch(err=> console.log(err))
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.post!=prevState.post){
            console.log("working")
        }
    }
  render() {
    return (
      <div>
          <h2> Life Cycle Methods</h2>
           {this.state.post?.map(p=>
            <div>
                <h5> {p.title} </h5>
                <p> {p.body}</p>
                <hr/>
            </div>)}
      </div>
    )
  }
}
