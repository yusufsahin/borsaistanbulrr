import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      a:5,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement=()=>{
    if(this.state.count<=0){
        return;
    }
    this.setState({count:this.state.count-1});
  }

  reset=()=>{
    this.setState({count:0});
  }

  render() {
    return (
      <>
        <p>sayaç : {this.state.count}</p>

        <button onClick={this.increment}>Arttır</button>
        <button onClick={this.decrement}>Azalt</button>
        <button onClick={this.reset}>Sıfırla</button>
        <p>a : {this.state.a}</p>
      </>
    );
  }
}
export default Counter;
