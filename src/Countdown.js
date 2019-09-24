import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { time, getEndOfWord } from './helpers';

class Countdown extends Component {
  static propTypes = {
    /** Time of end in UNIX */
    end: PropTypes.number.isRequired,
    /** UTC time zone */
    utc: PropTypes.number,
    /** Language */
    lang: PropTypes.oneOf(['ru', 'en']),
    /** className */
    className: PropTypes.string,
  };

  static defaultProps = {
    utc: 0,
    lang: 'ru',
    className: 'Countdown',
  };

  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  };

  componentDidMount() {
    this.calculateTime();
  }

  getCount = (difference, type) => {
    const result = difference / time[type];

    if (result >= 1) {
      return Math.floor(result);
    }

    return 0;
  };

  calculateTime = () => {
    const { end, utc } = this.props;
    const now = (new Date().getTime() / 1000) + (utc * time.hours);
    let difference = end - now;

    const days = this.getCount(difference, 'days');
    difference -= (time.days * days);
    const hours = this.getCount(difference, 'hours');
    difference -= (time.hours * hours);
    const minutes = this.getCount(difference, 'minutes');
    const seconds = Math.floor(difference - time.minutes * minutes);

    this.setState({
      days, hours, minutes, seconds,
    },
    () => setInterval(() => this.calculateTime(end), 1000));
  };

  render() {
    const { className, lang } = this.props;
    const {
      days, hours, minutes, seconds,
    } = this.state;

    return (
      <span className={className}>
        { `${!days ? '' : `${days} ${getEndOfWord(lang, 'days', days)} `}` }
        { `${!hours ? '' : `${hours} ${getEndOfWord(lang, 'hours', hours)} `}` }
        { `${!minutes ? '' : `${minutes} ${getEndOfWord(lang, 'minutes', minutes)} `}` }
        { `${!seconds ? '' : `${seconds} ${getEndOfWord(lang, 'seconds', seconds)} `}` }
      </span>
    );
  }
}

export default Countdown;
