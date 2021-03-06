import React, { Component } from 'react';
import Countdown from 'on-react-countdown';

class Comp extends Component {
  state = {
    end: 20
  };

  handleFinish = () => console.log('finish!');

  handleAddTime = (add) => this.setState({ end: this.state.end + add });
  handleRemoveTime = (remove) => this.setState({ end: this.state.end - remove });

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
        <Countdown end={end} onEnd={this.handleFinish} text={text} wordsEndingOff endInSeconds />
        <br/><br/>
        <span onClick={ () => this.handleAddTime(10) }>ADD 10 SECONDS</span>
        <br/>
        <span onClick={ () => this.handleAddTime(60) }>ADD 1 MINUTE</span>
        <br/>
        <span onClick={ () => this.handleAddTime(3600) }>ADD 1 HOUR</span>
        <br/>
        <span onClick={ () => this.handleAddTime(86400) }>ADD 1 DAY</span>
        <br/><br/>
        <span onClick={ () => this.handleRemoveTime(10) }>REMOVE 10 SECONDS</span>
        <br/>
        <span onClick={ () => this.handleRemoveTime(60) }>REMOVE 1 MINUTE</span>
        <br/>
        <span onClick={ () => this.handleRemoveTime(3600) }>REMOVE 1 HOUR</span>
        <br/>
        <span onClick={ () => this.handleRemoveTime(86400) }>REMOVE 1 DAY</span>
      </span>
    );
  }
}

export default Comp;
