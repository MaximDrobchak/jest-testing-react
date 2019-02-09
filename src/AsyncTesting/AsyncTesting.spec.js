import React from 'react';
import axios from 'axios';
import App from './AsyncTesting';

describe('App Component', () => {
  const result = { one: 1, thoo: 2, three: 3 };
  const promise = Promise.resolve(result);

  before(() => {
    sinon
      .stub(axios, 'get')
      .withArgs('http://www.mocky.io/v2/5c5ee620320000c00c40b434')
      .returns(promise);
  });

  after(() => {
    axios.get.restore();
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');

    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('fetches async counters', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().asyncCounters).to.equal(null);

    promise.then(() => {
      expect(wrapper.state().asyncCounters).to.equal(result);
    });
  });
});
