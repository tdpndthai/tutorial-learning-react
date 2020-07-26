import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components'
import { SearchBox } from './components/search-box/search-box.components'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: [],
      searchField: ''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monters, searchField } = this.state;
    const filteredMonters = monters.filter(monter =>
      monter.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(filteredMonters)
    return (
      <div className="App">
        <SearchBox placeholder="search monters" handleChange={this.handleChange} />
        <CardList monters={filteredMonters}></CardList>

      </div>
    );
  }
}

export default App;
