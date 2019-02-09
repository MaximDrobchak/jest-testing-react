import React from 'react';
class TestApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement () {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  render () {
    return (
      <div>
        <button type='button' onClick={this.onIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default TestApp;
