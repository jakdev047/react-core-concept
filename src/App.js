import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

// component
import Person from './component/Person/Person';

class App extends Component {
  render() {
    var mySelf = {
      name:'Jubayer Alam Khan',
      profession: 'Front-end-developer'
    }
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <Person mySelf={mySelf}/>
          </header>
        </div>
      </Fragment>
    )
  }
}

export default App;
