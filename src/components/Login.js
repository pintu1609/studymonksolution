
import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import { connect } from 'react-redux';
import {login} from '../store/userStore';
import  withRouter  from '../utils/withRouter'



class Login extends Component {
    // navigate = useNavigate();
    constructor(props) {
        super(props);
        this.state = {
        
        userEmail: " ",
          password: " ",
        };
      
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleLogIn =(e)=>{
        e.preventDefault()
       const { userEmail, password } = this.state;
       const userData = {
         userEmail,
         password,
         
       }; 
       this.props.login(userData);

       const { navigate } = this.props;

        navigate("/candidates")
     }

     componentDidMount() {
        const { isloggedIn} = this.props;
        if (isloggedIn) {
        const { navigate } = this.props;

        navigate("/candidates")
        } 
        
      }


    render() {
        const {  userEmail, password } = this.state;
    return (
      <div>
            <div className="login d-flex" style={{height:'100vh',backgroundColor:'rgb(192 237 255 / 54%)'}}>
                <div className="container1 d-flex flex-column" style={{ width:'50%', alignItems:'center',justifyContent:'center',fontStyle:'italic'}}>
                    <h2>Welcome</h2>
                    <h3>Unlock Your World. Login and Explore</h3>

                </div>
                <div className="form d-flex" style={{alignItems:'center', justifyContent:'center', width:'50%'}}>
                
                <form style={{border:'2px solid black', borderRadius:20, padding:20, width: '65%'}}>
                <h2 className='d-flex' style={{alignItems:'center',justifyContent:'center',fontStyle:'italic'}}>Login Now</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">UserEmail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="userEmail" onChange={this.handleInputChange} value={userEmail} />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"  name="password" onChange={this.handleInputChange} value={password}/>
                    </div>
                    <div class="d-grid gap-2 col-4 mx-auto">

                    <button type="submit" className="btn btn-primary" style={{}}onClick={this.handleLogIn}>Submit</button>
                    </div>
                    <div class=" my-2"style={{fontSize:12}}>
                         <Link className="nav-link"  to="/register">Don.t have a account! Register</Link>
                         <Link className="nav-link" to="/">Forget Password</Link>
                    </div>
                </form>
                </div>    
                    
             </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      isloggedIn: state.rootReducer.isloggedIn,
      userDetails: state.rootReducer.user,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      login: (userData) => dispatch(login(userData)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));