
import React, { useEffect,useState } from 'react';
import { authenticated, Login } from '../functions/authentication';
import './css/login.scss';
import { anim } from '../functions/anim';
import { $ }  from 'react-jquery-plugin'


const SignInForm = () =>{

  const [emailVal,setEmail] = useState("");
  const [passwordVal,setPassword] = useState("");
  const [invalidEmail,inValidEmail] = useState(false);
  const [invalidPassword,inValidPassword] = useState(false);
  const [response,setResponse]=useState("");
  const [emailDivClass,setEmailDivClass] = useState("inputDiv");
  const [passwordDivClass,setPasswordDivClass] = useState("inputDiv");
  const [showSpinner,setShowSpinner] = useState(false);

  const openAlert = ()=>{
    $('#logged_in').modal('show');
    $('#logged_in').on('hidden.bs.modal', function (e) {
      window.location.href = '/';
    })
  }
  
  const login = () =>{
    Login(emailVal,passwordVal,callBack);
    setShowSpinner(true);
  };

  const callBack = (success,responseMessage) =>{
    setShowSpinner(false);
    if(success){
      window.location.href = "/";
    }
    else{
      setResponse(responseMessage);
      openModal();
    }
    
  }
  const openModal = ()=>{
    $('#exampleModal').modal('show');
  }

  const handleEmail = (event) =>{
    let email = event.target.value;
    let invalid = !email.includes("@");
    inValidEmail(invalid);
    invalid?setEmailDivClass("inputDiv red"):setEmailDivClass("inputDiv");
    setEmail(event.target.value);
  }

  const handlePassword = (event) =>{
    let pass = event.target.value;
    let invalid = pass==="";
    inValidPassword(invalid);
    invalid?setPasswordDivClass("inputDiv red"):setPasswordDivClass("inputDiv");
    setPassword(event.target.value);
  }
  useEffect(()=>{
    anim();
    if(authenticated()){
      console.log("yes")
      openAlert();
      
    }
  },[]);
  
  return(<div className="signInDiv">
    <div className="signInForm anim anim1">
      <h1>Sign in</h1>
      <div >
        <hr/>

        <div className={emailDivClass} style={{width:'inherit'}}>
          <label htmlFor="email">Email{invalidEmail && <span style={{color:"red"}}> Invalid email</span>}<br/>
            
          </label><br/><input type="email" value={emailVal} onChange={handleEmail}/><br/>
        </div>
          
        <div className={passwordDivClass} style={{width:'inherit'}}>
          <label htmlFor="password">Password{invalidPassword && <span style={{color:"red"}}> Invalid password</span>}<br/>
            
          </label><br/><input type="password" value={passwordVal} onChange={handlePassword}/><br/>
        </div>
      </div>
      
      <button  onClick={login} type="button" className="btn btn-primary ripple ">
        {showSpinner && 
        <div class="spinner-border spinner-border-sm text-white me-2" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>}
        Sign in
      </button>

    </div>
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{response}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          </div>
      </div>
    </div>
    <div className="modal fade" id="logged_in" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Your already logged in</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          
          </div>
      </div>
    </div>
  </div>);
}


function LoginPage() {
  return (<>
    <div className='container-fluid' style={{height:"100vh",padding:0}}>
      <div className=" row backGround">
      <div className='leftPanel col-sm-8'>
          <div className='anim anim2'>
            <p >Little Audit Docs </p>
            <span>and Services</span>
          </div>
        </div>
        <div className="signInPanel col-sm-4">
          <SignInForm/>
        </div>
        
        
      </div>
    </div>
    
  </>);
}

export default LoginPage;
