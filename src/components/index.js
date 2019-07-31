import React, { Component } from 'react';
import swal from 'sweetalert';
import Box from './Box';
import Board from './Board'

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
    won: false
  }

  clickBox = (key) => {
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
    const boxes = 
      this.state.board.map(
        (box, i)=> 
        <Box 
          box={box}
          key={i}
          onClick={() => this.clickBox(i)}/>
      )

    return (
      <div className="container">
        <h3> Tic Tac Toe</h3>
        <div className="board"> 
        {boxes}
        </div>
      </div>
    );
  }
}

export default Main;
