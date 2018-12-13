import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    this.setState(st => ({score: st.score+1}));
  }

  downVote() {
    this.setState(st => ({score: st.score-1}));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Card>
          <CardBody>
            <CardText>{this.props.joke}</CardText>
            <Button onClick={this.upVote}>Up</Button>
            <Button onClick={this.downVote}>Down</Button>
            <CardTitle>Score: {this.state.score}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Joke;
