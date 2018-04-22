import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
  }
  render() {
    const list = [
      'Item 1',
      'Item 2',
      'Another Item'
    ];
    return (
      <div className="App">
        <h1>{
            list.map(item => {
              return (
                  <div key={item} onMouseEnter={this.onMouseEnter}>{item}</div>
                );
            })
        }
        </h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input => this.input = input} />
        </form>
      </div>
    );
  }
}

export default App;
