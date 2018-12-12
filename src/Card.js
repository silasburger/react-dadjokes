import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'react-strap';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    }
  }
 
  render() {
    return <Card>{this.state.joke}</Card>
  }
}

export default Card;