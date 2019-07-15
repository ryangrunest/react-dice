import React, { Component } from 'react';

class Dice extends Component {
  defaultProps = {
    value : 2
  }

  render() {
    return(
      <div className="Dice">
        <i className="fas fa-dice-one"></i>
      </div>
    )
  }
}

export default Dice;