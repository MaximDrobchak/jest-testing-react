import React from 'react';
import axios from 'axios';
class TestApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
      asyncCounters: null,
    };

    this.onIncrement = this.onIncrement.bind(this);
  }

  componentDidMount () {
    axios
      .get('http://www.mocky.io/v2/5c5ee620320000c00c40b434')
      .then(res => this.setState({ asyncCounters: res }))
      .catch(error => console.log(error));
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
