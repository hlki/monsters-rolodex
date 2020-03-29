import React from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  // here we have undefined 'this'
  /*handleChange(element) {
    this.setState({ searchField: element.target.value });
  }*/

  handleChange = (element) => {
    this.setState({ searchField: element.target.value });
  }

  render() {
    const { monsters, searchField } = this.state
    // the same as
    /*
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */

    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;