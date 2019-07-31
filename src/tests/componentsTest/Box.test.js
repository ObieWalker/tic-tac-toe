import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Box from '../../components/Box';



let mountedComponent;
let props;

let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<Box {...props} />);
  }
  return mountedComponent;
};

describe('Layout Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
