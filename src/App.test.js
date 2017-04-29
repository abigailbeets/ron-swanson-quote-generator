import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe("When the Ron Swanson Quote Generator page loads", () => {
  it('renders the Ron Swanson photo div', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App />, div)
    expect(wrapper.find('#ron-swanson-photo')).to.have.length(1)
  })
})
