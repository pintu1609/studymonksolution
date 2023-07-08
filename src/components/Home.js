import React, { Component } from 'react'
import NavBar from './NavBar'
import'./background.css';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <div style={{backgroundColor: '#8fb7dbc7'}}>
        
                <div className="container d-flex flex-col" style={{alignItems:'center', justifyContent:'center', width:'100vw', height:578,padding:-10, color:'rgb(0 188 255 / 89%)',fontStyle:'italic'}}>
                
                <p className='' style={{padding:-15, marginBottom:0}}>Unlocking Global Talent Revolutionize</p>
                 <p className='' style={{padding:-15}}>Your Hiring with E-Recruitment!</p>
                </div>
                <div className="content d-flex"style={{justifyContent:'center',alignItems:'center'}}>
                    <p className="e-recrutment my-2 mx-2" style={{fontSize:20, width:'90vw',border: '2px solid black',  borderRadius:20, padding:5 }}>E-recrutement, or online recruitment, is the process of using electronic methods and platforms to attract, evaluate, and hire candidates for job positions. 
                    It leverages the power of the internet to reach a larger pool of potential candidates globally. E-recrutement streamlines the recruitment process by automating tasks,
                    such as online applications and candidate management, and facilitates the use of assessment tools for evaluating suitability. It promotes transparency and collaboration among stakeholders
                    , enables data-driven recruitment strategies, and improves overall recruitment outcomes. However, it also presents challenges, such as managing high application volumes and addressing biases.
                    Overall, e-recrutement revolutionizes talent acquisition, offering efficiency, wider reach, collaboration, and data-driven insights to optimize the recruitment process.
                    </p>
                </div>
                <div>
                <h2 className='my-2 mx-2 d-flex'style={{fontStyle:'italic',justifyContent:'center',alignItems:'center'}}>Benefit of E-Recruitment</h2>
                <div className="benefit d-flex flex-row mb-3" style={{alignItems:'center', justifyContent:'center'}}>
                <div class="card" style={{width: '20rem',margin:10,backgroundColor:'rgb(184 124 76 / 42%)', borderRadius:20}}>
                    <div class="card-body">
                    <h5 class="card-title">Enhanced Reach and Access to a Global Talent Pool</h5>
                    <p class="card-text">Enhanced Reach and Access to a Global Talent Pool: E-recruitment expands
                     the reach of organizations by leveraging online platforms, allowing them to attract and access
                      a diverse talent pool globally. This opens up opportunities to tap into highly qualified candidates 
                      from different geographical locations, bringing in a wider range of skills and experiences.</p>
                    
                    </div>
                </div>

                <div class="card" style={{width: '18rem', margin:10,backgroundColor:'rgb(184 124 76 / 42%)', borderRadius:20}}>
                    
                    <div class="card-body">
                        <h5 class="card-title">Streamlined and Efficient Recruitment Process</h5>
                        <p class="card-text">Streamlined and Efficient Recruitment Process: E-recruitment automates
                         various recruitment tasks, such as online applications and candidate screening, streamlining the 
                         process and saving time and resources. This efficiency enables recruiters to focus more on evaluating 
                         candidates and making informed hiring decisions.</p>
                        
                        </div>
                    </div>

                <div class="card" style={{width: '18rem', margin:10,backgroundColor:'rgb(184 124 76 / 42%)', borderRadius:20}}>
                    
                    <div class="card-body">
                        <h5 class="card-title"> Data-Driven Decision Making</h5>
                        <p class="card-text">Data-Driven Decision Making: E-recruitment utilizes data analytics to gather 
                        insights into recruitment effectiveness, sourcing channels, and hiring metrics. This data-driven approach 
                        empowers organizations to make informed decisions, optimize their recruitment strategies, and enhance the overall quality of hires.</p>
                       
                    </div>
                </div>
                </div>
            </div>

            <Footer/>
        
        </div>
        </div>
    )
  }
}
