import React, { Component } from 'react'

export default class CandiatesItem extends Component {
  render() {
    let{title, name, description, skills, location}=this.props;
    return (
      <div className='mx-5'>
        <div class="card" style={{width: '18rem'}}>
           
            <div class="card-body d-flex" style={{alignItems:'center', justifyContent:'center'}}>
                <h5 class="card-title">{title}</h5>
               
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name:{name}</li>
                <li class="list-group-item">Location:{location}</li>
                <li class="list-group-item">Skill:{skills}</li>
            </ul>
            <div class="card-body">
                
                <p class="card-text">{description}</p>
            </div>
            
        </div>
      </div>
    )
  }
}

