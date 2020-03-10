import React, { Component,Fragment } from 'react';

class Person extends Component {
  render() {
    const {name,profession} = this.props.mySelf;
    return (
      <Fragment>
        <h2>{name}</h2>
        <p style={{fontStyle:'italic',color:'#eb1'}}>{profession}</p>
        <ul>
          {this.props.skills.map((skill,index)=>
            <li key={index} style={{fontStyle:'italic',color:'cyan'}}>{skill}</li>
          )}
        </ul>
        
      </Fragment>
    )
  }
}

export default Person;