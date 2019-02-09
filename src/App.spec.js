import React from 'react';
import App, { doIncrement, doDecrement, Counter, List } from './App';

describe('Local State', () => {
  it('should increment the countere', () => {
    const test = value => value;
    let value = 1;

    expect(doIncrement(test, value)).to.equal(value + 1);
    expect(doDecrement(test, value)).to.equal(value - 1);
  });
});

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Counter)).to.have.length(1);
  });

  it('renders the List wrapper with list elements', () => {
    const wrapper = shallow(<List items={[ 'a', 'b' ]} />);
    expect(wrapper.find('li')).to.have.length(2);
    expect(wrapper.find('.list')).to.have.length(1);
  });
});
