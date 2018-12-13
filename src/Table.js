import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: true
    };
  }

  async componentDidMount() {
    const res = await axios({
      method: 'get',
      url: 'https://icanhazdadjoke.com/search?limit=10',
      headers: {
        Accept: 'application/json'
      }
    });
    console.log(res.data.results)
    this.setState({ jokes: res.data.results, loading: false });
  }

  render() {
    const jokes = this.state.jokes.map(joke => <Joke key={joke.id} joke={joke.joke} />);
    console.log(jokes);
    return <>{jokes}</>;
  }
}

export default Table;
