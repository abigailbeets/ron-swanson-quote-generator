import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe("When the Ron Swanson Quote Generator page loads", () => {
  it('renders a picture of Ron Swanson', () => {
    const div = document.createElement('div')
    const wrapper = ReactDOM.render(<App />, div)
    expect(wrapper.find('#ron-swanson-photo')).to.have.length(1)
  })
});
