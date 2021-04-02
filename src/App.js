import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';


class App extends Component {
  
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    //This render a function on the block, before render the viewer components
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  render(){
 return(
      
  <div className="App">

    <CardList monsters={this.state.monsters} />
</div>
 )
  }
}
export default App;
