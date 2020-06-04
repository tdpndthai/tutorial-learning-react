import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  state = {
    person: [
      { name: "ấdgag", age: 28 },
      { name: "agasgd", age: 23 },
      { name: "agag", age: 22 },
    ]
  }
  return (
    <div className="App">
      <button>Switch name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age} />
      <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  );
}

export default App;
