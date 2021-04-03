import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';

import './App.css';


class App extends Component {
  
  constructor(){
    /**
     * Super() extending the functionality that exist on component
     * Methods and variables in the constructor are visible in this class. Includes componentDidMount
     */
    super();

    this.state = { //Similar use to useState hook
      monsters: [],
      searchField: ''
    }

    
  }

  componentDidMount(){
    //This render a function on the block, before render the viewer components
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = (e) =>{
    this.setState({ searchField: e.target.value})
    /**
     * 1- This uses an arrow function for the compiler to automatically initialize bind () in
     * the class by adding the function in context
     * 2- So, if you don't use an arrow function, this function is not in the context of this class
     */
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

 return(
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={this.handleChange}
      />
     

      <CardList monsters={filteredMonsters} />
    </div>
 )
  }
}
export default App;
