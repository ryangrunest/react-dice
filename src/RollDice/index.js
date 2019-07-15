import React, {Component} from 'react';
import Dice from '../Dice';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1 : 'fas fa-dice-two',
      dice2 : 'fas fa-dice-three',
      isRolling1: false,
      isRolling2: false,
      buttonText: 'Roll Dice'
    }
  };

  convertToString(num) {
    if (num === 1) {
      return "fas fa-dice-one"
    } else if (num === 2) {
      return "fas fa-dice-two"
    } else if (num === 3) {
      return "fas fa-dice-three"
    } else if (num === 4) {
      return "fas fa-dice-four"
    } else if (num === 5) {
      return "fas fa-dice-five"
    } else if (num === 6) {
      return "fas fa-dice-six"
    }
  };

  isRolling() {
    this.setState({isRolling1: true});
    this.setState({isRolling2: true});
    this.setState({buttonText: 'Rolling...'})
    console.log(this.state.isRolling1)
    setTimeout(() => {
      this.setState({isRolling1: false});
      this.setState({isRolling2: false});
      this.setState({buttonText: 'RollDice'})
    }, 1500);
  }

  rollDice() {
    let newDiceRoll1 = Math.floor(Math.random() * 6) + 1;
    let newDiceRoll2 = Math.floor(Math.random()* 6) + 1;
    this.isRolling();

    setTimeout(() => {
      this.setState({dice1: this.convertToString(newDiceRoll1)});
      this.setState({dice2: this.convertToString(newDiceRoll2)});
    }, 1000);
  };
  
  render() {
    return(
      <div className="RollDice">
        <div className="RollDice-dice-container">
          <Dice value={this.state.dice1} isRolling={this.state.isRolling1}/>
          <Dice value={this.state.dice2} isRolling={this.state.isRolling2}/>
        </div>
        <button className="RollDice-button" onClick={() => this.rollDice()}>{this.state.buttonText}</button>
      </div>
    )
  };
}

export default RollDice;