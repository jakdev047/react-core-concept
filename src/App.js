import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

// component
import Person from './component/Person/Person';
import Counter from './component/Counter/Counter';

class App extends Component {
  render() {
    var mySelf = {
      name:'Jubayer Alam Khan',
      profession: 'Front-end-developer'
    }
    var skills = ['HTML5','CSS3','SASS','JavaScript','React','Vue'];

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <Person mySelf={mySelf} skills={skills}/>

            <Counter />

          </header>
        </div>
      </Fragment>
    )
  }
}

export default App;
