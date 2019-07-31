import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Main from '../../components/index';



let mountedComponent;
let props;

let wrapper;

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<Main />);
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
  it('should have a method that handles setting play order', () => {
    wrapper.instance().setPlayOrder(3);
    expect(wrapper.state().playOrder).toEqual([1, 3]);
  });
  it('should have a method that handles undo last move', () => {
    wrapper.instance().undoLastMove();
    expect(wrapper.state().playOrder).toEqual([1]);
  });
  it('should have a method that handles checking for a draw', () => {
    wrapper.instance().checkForDraw();
    expect(wrapper.instance().resetGame).toBeDefined();
  });
  it('should have a method that handles reset game', () => {
    let initialState = {
      board: Array(9).fill(null),
      turn: "X",
      won: false,
      playOrder: []
    }
    wrapper.instance().resetGame();
    expect(wrapper.state()).toEqual(initialState);
  });
  it('should have a method that handles check for winner', () => {

    wrapper.instance().clickBox(0);
    wrapper.instance().clickBox(3);
    wrapper.instance().clickBox(1);
    wrapper.instance().clickBox(4);
    wrapper.instance().clickBox(2);
    expect(wrapper.instance().resetGame).toBeDefined();
    expect(wrapper.state().won).toEqual(true);
  });
  it('should have a method that checks win condition', () => {
    expect(wrapper.instance().winCondition("0", "1", "2")).toEqual(true);
  });
});
