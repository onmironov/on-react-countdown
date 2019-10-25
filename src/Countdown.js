import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Countdown extends Component {
  TIME = {
    days: 86400,
    hours: 3600,
    minutes: 60,
  };

  static propTypes = {
    end: PropTypes.number.isRequired,
    utc: PropTypes.number,
    lang: PropTypes.oneOf(['en', 'ru']),
    className: PropTypes.string,
    text: PropTypes.shape({}),
    separator: PropTypes.string,
    wordsEndingOff: PropTypes.bool,
    wordsOff: PropTypes.bool,
    hideZeroValues: PropTypes.bool,
    alwaysDoubleDigit: PropTypes.bool,
    limit: PropTypes.oneOfType([
      null,
      PropTypes.number,
    ]),
    onEnd: PropTypes.func,
  };

  static defaultProps = {
    utc: 0,
    lang: 'en',
    className: 'Countdown',
    text: {
      days: ['day', 'days'],
      hours: ['hour', 'hours'],
      minutes: ['minute', 'minutes'],
      seconds: ['second', 'seconds'],
    },
    separator: ' ',
    wordsEndingOff: false,
    wordsOff: false,
    hideZeroValues: false,
    alwaysDoubleDigit: false,
    limit: null,
    onEnd: () => {},
  };

  state = {
    periods: {},
  };

  componentDidMount() {
    this.calculateTime();
  }

  handleOnEnd = () => {
    const { onEnd } = this.props;

    onEnd();
  };

  checkValue = value => (value < 10 ? `0${value}` : value);

  getCount = (difference, type) => {
    const result = difference / this.TIME[type];

    if (result >= 1) {
      return Math.floor(result);
    }

    return 0;
  };

  getWithLimit = (newState) => {
    const { limit } = this.props;
    const result = {};
    const values = Object.values(newState);
    let prevKey = '';
    let firstIndex = values.findIndex(value => !!value);
    let keys = Object.keys(newState);

    if (keys.length - limit < firstIndex) {
      firstIndex = keys.length - limit;
    }

    if (firstIndex) {
      keys = keys.slice(firstIndex);
    }

    keys.forEach((period) => {
      if (Object.keys(result).length < limit) {
        result[period] = newState[period];
        prevKey = period;
      } else if (!!newState[period] && newState[prevKey] === 0) {
        delete result[prevKey];
        result[period] = newState[period];
      }
    });

    return result;
  };

  calculateTime = () => {
    const { periods } = this.state;
    const { end, utc, limit } = this.props;
    const now = (new Date().getTime() / 1000) + (utc * this.TIME.hours);
    let isNeedSetState = false;
    let newPeriods = {};
    let difference = end - now;

    if (difference < 0) {
      this.handleOnEnd();
      return null;
    }

    newPeriods.days = this.getCount(difference, 'days');
    difference -= (this.TIME.days * newPeriods.days);
    newPeriods.hours = this.getCount(difference, 'hours');
    difference -= (this.TIME.hours * newPeriods.hours);
    newPeriods.minutes = this.getCount(difference, 'minutes');
    const seconds = Math.floor(difference - this.TIME.minutes * newPeriods.minutes);
    newPeriods.seconds = seconds >= 1 ? seconds : 0;

    if (limit) {
      newPeriods = this.getWithLimit(newPeriods);
    }

    Object.keys(newPeriods).forEach((period) => {
      if (newPeriods[period] !== periods[period] && !isNeedSetState) {
        isNeedSetState = true;
      }
    });

    if (isNeedSetState) {
      this.setState({ periods: newPeriods },
        () => setTimeout(() => this.calculateTime(end), 1000));
    } else {
      setTimeout(() => this.calculateTime(end), 1000);
    }
  };

  getText = (name, value) => {
    const {
      text: propsText, lang, wordsEndingOff, wordsOff,
    } = this.props;
    let index = value === 1 ? 0 : 1;

    if (wordsOff) return null;

    if (lang === 'ru') {
      const cases = [2, 0, 1, 1, 1, 2];
      index = (value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5];
    }

    return wordsEndingOff ? propsText[name] : propsText[name][index];
  };

  renderString = (name, value, type) => {
    const { className, alwaysDoubleDigit } = this.props;
    let text = value;

    if (type === 'text') {
      text = this.getText(name, value);
    } else if (alwaysDoubleDigit) {
      text = this.checkValue(text);
    }

    return (
      <span className={`${className}-${name}-${type}`}>
        { text }
      </span>
    );
  };

  renderPeriod = (name, value, i, length) => {
    const {
      className, separator, wordsOff, hideZeroValues,
    } = this.props;

    if (hideZeroValues && !value) return null;

    return (
      <span className={`${className}-${name}`} key={name}>
        { this.renderString(name, value, 'value') }
        { !wordsOff && separator }
        { this.renderString(name, value, 'text') }
        { i + 1 !== length && separator }
      </span>
    );
  };

  render() {
    const { className } = this.props;
    const { periods } = this.state;
    const array = Object.keys(periods) || null;

    if (!array || !array.length) return null;

    return (
      <span className={className}>
        { array.map((period, i) => this.renderPeriod(period, periods[period], i, array.length)) }
      </span>
    );
  }
}

export default Countdown;
