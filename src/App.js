import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        character: data
      })
    })
  }

  render() {
    // const name = this.state.character.name
    // const isLoading = this.state.loading
    return (
      <div>{this.state.loading ? "Loading!" : this.state.character.name}</div>
    )
  }
}

export default App;
