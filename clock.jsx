import React from 'react';
import merge from 'lodash/merge';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = { date: new Date()};
    this.interval;
  }

  componentDidMount() {
    let that = this;
    this.interval = setInterval(that.tick.bind(that), 1000);
  }

  tick() {
    const newDate = new Date();
    this.setState({date: newDate});
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() { return (
    <div>
      <h2> Date: {this.state.date.toString()} </h2>
    </div>
  );}

}

export default Clock;
