// modules
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// alias
import { increment, reset as resetCounter } from 'actions/counter';

@connect((state) => ({
  counter: state.getIn(['counter', 'counter']),
}), { increment, resetCounter })
export default class Home extends PureComponent {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired,
    resetCounter: PropTypes.func.isRequired,
  }

  static defaultProps = {

  }

  handleIncrement = () => {
    this.props.increment();
  }

  handleReset = () => {
    this.props.resetCounter();
  }

  render() {
    return (
      <div>
        <h1>{ 'Jason\'s Homepage' }</h1>
        <Link to='/about'>{ 'About' }</Link>
        <p> {'Counter: '} { this.props.counter }</p>
        <button onClick={ this.handleIncrement }>{ 'Increment' }</button>
        <button onClick={ this.handleReset }>{ 'Reset' }</button>
      </div>
    );
  }
}
