import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is being initialized");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
    // Simulate data fetching
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should the component update?");
    // Allow updates only if count is less than 10
    return nextState.count < 10;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component updated");
    console.log("Previous State:", prevState);
    console.log("Current State:", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being removed");
    clearInterval(this.timer);
  }

  render() {
    console.log("Render: Rendering the component");
    return (
      <div>
        <h1>React Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
