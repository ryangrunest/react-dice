import React, { Component } from 'react';
import './Dice.css'

class Dice extends Component {

  render() {
    let isRolling = 'notRolling';
    if (this.props.isRolling === false) {
      isRolling = 'notRolling';
    } else {
      isRolling = 'isRolling';
    }
    return(
      <div className="Dice">
        <div className={isRolling}>
          <i className={this.props.value}></i>
        </div>
      </div>
    )
  }
}

export default Dice;