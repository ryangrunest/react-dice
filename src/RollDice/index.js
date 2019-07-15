import React, {Component} from 'react';
import Dice from '../Dice';

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
        <Dice value={this.state.dice1}/>
        <Dice value={this.state.dice2}/>
        <button onClick={() => this.rollDice()}></button>
      </div>
    )
  }
}

export default RollDice;