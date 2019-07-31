import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import Main from '../../components/index';



let mountedComponent;
let props;

let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<Main {...props} />);
  }
  return mountedComponent;
};

describe('Layout Component', () => {
  beforeEach(() => {});
  wrapper = getComponent();

  it('component successfully rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

//   it('should have a method that handles toggle modal visibility', () => {
//     wrapper.instance().toggleModalVisibility();
//     expect(wrapper.state().productModalVisible).toEqual(true);
//   });
//   it('should have a method that handles toggle sign in modal visibility', () => {
//     wrapper.instance().toggleSignInModalVisibility();
//     expect(wrapper.state().signInModalVisible).toEqual(true);
//   });
//   it('should have a method that handles auth modal visibility', () => {
//     wrapper.instance().openAuthModal();
//     expect(wrapper.state().signInModalVisible).toEqual(true);
//   });
//   it('should have a method that handles cart visibility', () => {
//     wrapper.instance().openCart();
//     expect(wrapper.state().cartVisible).toEqual(true);
//   });
//   it('should have a method that handles close visibility', () => {
//     wrapper.instance().onClose();
//     expect(wrapper.state().cartVisible).toEqual(false);
//   });
//   it('should have a method that handles checkout modal visibility', () => {
//     wrapper.instance().openCheckoutModal();
//     expect(wrapper.state().checkoutVisible).toEqual(true);
//   });
//   it('should have a method that handles closes checkout modal', () => {
//     wrapper.instance().handleVisibility();
//     expect(wrapper.state().checkoutVisible).toEqual(false);
//   });
//   it('should have a method that sets product state', () => {
//     wrapper.instance().setProductsState(1, null, null);
//     expect(wrapper.state().department).toEqual(1);
//   });
//   it('should have a method that handles page change state', () => {
//     wrapper.instance().changePage(1);
//     expect(wrapper.state().page).toEqual(1);
//   });
//   it('should have a method that handles preset products', () => {
//     wrapper.instance().resetProducts();
//     expect(wrapper.state().page).toEqual(1);
//   });
});
