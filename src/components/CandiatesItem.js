import React, { Component } from 'react'

export default class CandiatesItem extends Component {
  render() {
    let{title, name, description, skills, location}=this.props;
    return (
      <div className='mx-5 my-3'>
        <div class="card" style={{width: '20rem' ,height:'33rem' }}>
           
            <div class="card-body d-flex" style={{alignItems:'center', justifyContent:'center'}}>
                <h5 class="card-title" style={{height:'1rem'}}>{title}</h5>
               
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"style={{height:'3rem'}}>Name: {name}</li>
                <li class="list-group-item"style={{height:'3rem'}}>Location: {location}</li>
                <li class="list-group-item"style={{height:'5rem'}}>Skill: {skills}</li>
            </ul>
            <div class="card-body">
                
                <p class="card-text"style={{height:'21rem'}}>{description}</p>
            </div>
            
        </div>
      </div>
    )
  }
}

