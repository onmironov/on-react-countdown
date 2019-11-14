import React, { Component } from 'react';
import Countdown from 'on-react-countdown';

class Comp extends Component {
  state = {
    end: 1573719331
  };

  handleFinish = () => console.log('finish!');

  handleAddTime = (add) => this.setState({ end: this.state.end + add });

  render() {
    const text = {
      days   : 'дн.',
      hours  : 'ч.',
      minutes: 'мин.',
      seconds: 'сек.',
    };
    const { end } = this.state;

    return (
      <span>
        <Countdown end={end} onEnd={this.handleFinish} text={text} wordsEndingOff />
        <br/><br/>
        <span onClick={ () => this.handleAddTime(10) }>ADD 10 SECONDS</span>
        <br/>
        <span onClick={ () => this.handleAddTime(60) }>ADD 1 MINUTE</span>
        <br/>
        <span onClick={ () => this.handleAddTime(3600) }>ADD 1 HOUR</span>
        <br/>
        <span onClick={ () => this.handleAddTime(86400) }>ADD 1 DAY</span>
      </span>
    );
  }
}

export default Comp;
