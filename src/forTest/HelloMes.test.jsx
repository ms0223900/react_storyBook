import React from 'react'
import { shallow } from 'enzyme';

import WelcomMes from './HelloMes';

function setup() {
  const props = {
    imgPath: 'some/path/aaa/',
  };
  const wrapper = shallow(<WelcomMes props/>);
  return { wrapper, props };
}

describe('Welcome message test', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
})
