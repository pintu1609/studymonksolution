
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../store/userStore';
import  withRouter  from '../utils/withRouter'
import { Link } from 'react-router-dom';




 class Register extends Component {
    // navigate = useNavigate();
    constructor(props) {
        super(props);
        this.state = {
         firstName: " ",
        lastName:" ",
        phone:" ",
        userEmail: " ",
          password: " ",
        };
        

      
    }
    

      handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSignUp =(e)=>{
        e.preventDefault()
       const { userEmail, password,firstName,lastName,phone } = this.state;
       const userData = {
         userEmail,
         password,
         firstName,
         lastName,
         phone
       }; 
       this.props.signup(userData);
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
    const { firstName, lastName, userEmail, phone, password } = this.state;
    return (
      <div>
            <div className="login d-flex" style={{height:'100vh',backgroundColor:'rgb(192 237 255 / 54%)'}}>
                <div className="container2 d-flex flex-column" style={{ width:'50%', alignItems:'center',justifyContent:'center',fontStyle:'italic'}}>
                    <h2>Welcome</h2>
                    <h3>Join the Journey. Register and </h3>
                        <h3>Unlock a World of Opportunities.</h3>

                </div>
                <div className="form d-flex" style={{alignItems:'center', justifyContent:'center', width:'50%'}}>
                <form  style={{border:'2px solid black', borderRadius:20, padding:20}}>
                        <h2 className='d-flex' style={{alignItems:'center',justifyContent:'center', fontStyle:'italic'}}>Register Now</h2>
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="exampleInputFirstName" className="form-label">First-Name</label>
                            <input type="text" className="form-control"  aria-label="First name" name='firstName' onChange={this.handleInputChange} value={firstName} />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputLastName" className="form-label">Last-Name</label>
                            <input type="text" className="form-control"  aria-label="Last name" name='lastName' onChange={this.handleInputChange} value={lastName}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='userEmail' onChange={this.handleInputChange} value={userEmail} />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">Phone No.</label>
                        <input type="email" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" name='phone' onChange={this.handleInputChange} value={phone}/>
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={this.handleInputChange} value={password}/>
                    </div>
                    
                    <div className="d-grid gap-2 col-4 mx-auto">

                    <button type="submit" className="btn btn-primary" style={{}} onClick={this.handleSignUp}>Submit</button>
                    </div>
                    <div className=" my-2"style={{fontSize:12}}>
                         <Link className="nav-link"  to="/login">Already have a account! Login Now</Link>
                         
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
      signup: (userData) => dispatch(signup(userData)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));