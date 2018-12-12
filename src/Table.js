import React, { Component } from 'react';
import Card from './Card'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: true
    }
  }

  async componentDidMount() {
    const res = await axios({
      method: 'get',
      url: 'https://icanhazdadjoke.com/search?limit=10',
      responseType: 'application/json'
    });
    this.setState({jokes: res.results, loading: false});
  }


  render() {
    const cards = this.state.jokes.map(joke=><Card joke />)
    return cards;
  }
}

export default Table;