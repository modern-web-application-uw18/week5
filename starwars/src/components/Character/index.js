import React, { Component } from 'react'

class Character extends Component {
  
  render() {
    const{
      name,
      birth_year
    } = this.props.people;
    
    console.log(this.props.people)
    
    return(
      <div className="card-people">
        
        <p>
          Hello,<br />
          my name is <strong>{name}</strong>
         </p>
         <p>
           From: {birth_year} 
         </p>
      </div>
    );
  }

}

export default Character;