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

  it('should have a method that handles clicking a box', () => {
    wrapper.instance().clickBox(1);
    let newArray = [null, "X",null,null,  null,null, null, null, null]
    expect(wrapper.state().board).toEqual(newArray);
    expect(wrapper.state().turn).toEqual("O");
  });
  // it('should have a method that handles setting play order', () => {
  //   wrapper.instance().setPlayOrder(3);
  //   expect(wrapper.state().playOrder).toEqual([1, 3]);
  // });
  // it('should have a method that handles undo last move', () => {
  //   wrapper.instance().undoLastMove();
  //   expect(wrapper.state().playOrder).toEqual([1]);
  // });
  // it('should have a method that handles checking for a draw', () => {
  //   wrapper.instance().checkForDraw();
  //   expect(wrapper.instance().resetGame).toBeDefined();
  // });
  // it('should have a method that handles reset game', () => {
  //   let initialState = {
  //     board: Array(9).fill(null),
  //     turn: "X",
  //     won: false
  //   }
  //   wrapper.instance().resetGame();
  //   expect(wrapper.state()).toEqual(initialState);
  // });
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
