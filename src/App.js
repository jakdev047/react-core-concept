import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var mySelf = {
    name:'Jubayer Alam Khan',
    profession: 'Front-end-developer'
  }

  var myStyle = {
    color:'#eb1b33'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={myStyle}>{mySelf.name}</h2>
        <p style={{fontStyle:'italic',color:'#eb1'}}>{mySelf.profession}</p>
      </header>
    </div>
  );
}

export default App;
