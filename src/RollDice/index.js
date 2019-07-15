import React, {Component} from 'react';
import Dice from '../Dice';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1 : 2,
      dice2 : 3,
    }
  }

  rollDice() {
    let newDiceRoll1 = Math.floor(Math.random * 6) + 1;
    let newDiceRoll2 = Math.floor(Math.random * 6) + 1;
    this.setState({dice1: newDiceRoll1, dice2: newDiceRoll2});
  }
  
  render() {
    return(
      <div className="RollDice">
        <div className="RollDice-dice-container">
          <Dice value={this.state.dice1}/>
          <Dice value={this.state.dice2}/>
        </div>
        <button className="RollDice-button" onClick={() => this.rollDice()}>Roll Dice</button>
      </div>
    )
  }
}

export default RollDice;