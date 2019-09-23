import React, { Component } from 'react';

class Countdown extends Component {
  CONSTANTS = {
    days   : 86400,
    hours  : 3600,
    minutes: 60,
  };

  state = {
    days   : null,
    hours  : null,
    minutes: null,
    seconds: null
  };

  componentDidMount() {
    this.calculateTime();
  };

  getCount = (difference, type) => {
    const result = difference / this.CONSTANTS[ type ];

    if (result >= 1) {
      return Math.floor(result);
    }

    return 0;
  };

  calculateTime = () => {
    const { end, utc } = this.props;
    const now = (new Date().getTime() / 1000) + (utc * this.CONSTANTS.hours);
    let difference = end - now;

    const days = this.getCount(difference, 'days');
    difference = difference - (this.CONSTANTS.days * days);
    const hours = this.getCount(difference, 'hours');
    difference = difference - (this.CONSTANTS.hours * hours);
    const minutes = this.getCount(difference, 'minutes');
    const seconds = Math.floor(difference - this.CONSTANTS.minutes * minutes);

    this.setState({ days, hours, minutes, seconds }, () => setTimeout(() => this.calculateTime(end), 1000));
  };

  render() {
    const { className } = this.props;
    const { days, hours, minutes, seconds } = this.state;
    const css = className ? className : 'Countdown';

    return (
      <span className={ css }>
        { `${ !days ? '' : `${ days } дней ` }` }
        { `${ !hours ? '' : `${ hours } часов ` }` }
        { `${ !minutes ? '' : `${ minutes } минут ` }` }
        { `${ !seconds ? '' : `${ seconds } секунд ` }` }
      </span>
    );
  }
}

export default Countdown;
