import React from 'react';
import TestApp from './ClassCounter';
describe('TestApp Component', () => {
  it('increments the counter', () => {
    const wrapper = shallow(<TestApp />);

    wrapper.setState({ counter: 0 });
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state().counter).to.equal(1);
  });
});
