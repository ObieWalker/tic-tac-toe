import React, { Component } from 'react';
import swal from 'sweetalert';
import Box from './Box';

let winCombination = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"]
]

class Main extends Component {

  state = {
    board: Array(9).fill(null),
    turn: "X",
    won: false,
    playOrder: []
  }

  clickBox = (key) => {
    this.setPlayOrder(key)
    const { board, won } = this.state
    if (!board[key] && !won){
      let updatedBoard = this.state.board
      updatedBoard[key] = this.state.turn
      let nextPlayer = this.state.turn === "X" ? "O" : "X"
      this.setState({
        board: updatedBoard,
        turn: nextPlayer
      }, () => {
        this.checkForWinner()
      })
      this.checkForDraw()
    }
  }

  setPlayOrder = (key) => {
    this.setState(state => {
      const playOrder = state.playOrder.concat(key);
      return {
        playOrder
      };
    })
  }

  undoLastMove = () => {
    let lastMove = this.state.playOrder.length - 1
    let updatedBoard = this.state.board
    updatedBoard[this.state.playOrder[lastMove]] = null
    this.setState(state => {
      const playOrder = state.playOrder.filter((item, j) => lastMove !== j);
      return {
        playOrder,
        turn: this.state.turn === "X" ? "O" : "X"
      };
    });
  }

  checkForDraw = () => {
    if (!this.state.board.includes(null)){
      swal({
        text: 'The game is a draw.',
      }).then(() => {
        this.resetGame()
      })
    }
  }

  resetGame = () => {
    this.setState({
      board: Array(9).fill(null),
      turn: "X",
      won: false
    })
  }
  
  checkForWinner = () => {
    winCombination.map(combo => {
      const [box1, box2, box3] = combo
      if (this.winCondition(box1, box2, box3)){
        const winningPlayer = this.state.turn === "X" ? "Player 2(O)" : "Player 1(X)"
        this.setState({
          won: true
        })
        swal({
          text: `${winningPlayer} has won.`,
        }).then(() => {
          this.resetGame()
        })
      }
    })
  }

  winCondition = (box1, box2, box3) => {
    return Boolean(
      this.state.board[box1] 
      && this.state.board[box1] === this.state.board[box2]
      && this.state.board[box1] === this.state.board[box3]
    )
  }

  render() {
    const boxes = this.state.board.map(
      (box, i)=> 
      <Box
        turn={this.state.turn}
        box={box}
        key={i}
        onClick={() => this.clickBox(i)}
      />
    )

    return (
      <div className="container">
        <div>
          <h2 className="header-text"> Tic Tac Toe</h2>
          <span><button className="undo-button" onClick={this.undoLastMove}>Undo</button></span>
        </div>
        <div className="board"> 
          {boxes}
        </div>
      </div>
    );
  }
}

export default Main;
