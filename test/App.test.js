import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe("When the Ron Swanson Quote Generator page loads", () => {
  beforeEach(() => {
    const div = document.createElement('div')
    const wrapper = mount(<App />, div)
  })

  it('renders the Ron Swanson photo div', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App />, div)
    expect(wrapper.find('#ron-swanson-photo')).to.have.length(1)
  })

  it('renders a quote container', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App />, div)
    expect(wrapper.find('.quote-container')).to.have.length(1)
  })

  it('renders a get quote button', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App />, div)
    expect(wrapper.find('#get-quote-button')).to.have.length(1)
  })

  it('renders a build random quote button', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App />, div)
    expect(wrapper.find('#build-random-quote-button')).to.have.length(1)
  })

  // describe('When the user clicks the get quote button,' () => {
  //   it('renders a random quote', () => {
  //
  //
  //   })
  // })
})
