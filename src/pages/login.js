
import React, { useEffect,useState } from 'react';
import { Login } from '../functions/authentication';
import Modal from 'react-modal';
import './css/login.scss';
import { anim } from '../functions/anim';


Modal.setAppElement('#root');
const SignInForm = () =>{

  const [emailVal,setEmail] = useState("");
  const [passwordVal,setPassword] = useState("");
  const [invalidEmail,inValidEmail] = useState(false);
  const [invalidPassword,inValidPassword] = useState(false);
  const [response,setResponse]=useState("");
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [emailDivClass,setEmailDivClass] = useState("inputDiv");
  const [passwordDivClass,setPasswordDivClass] = useState("inputDiv");

  const login = () =>{
    Login(emailVal,passwordVal,callBack);
  };

  const callBack = (success,responseMessage) =>{
    if(success){
      window.location.href = "/";
    }
    else{
      setResponse(responseMessage);
      setModalIsOpen(true);
    }
    
  }

  const closeModal = ()=>{
    setModalIsOpen(false);
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
      
      <button  onClick={login} type="button" className="btn btn-primary ripple ">Sign in</button>

    </div>
    <Modal id='modal' style={ModalStyle} isOpen = {modalIsOpen}  >
      <p style={{paddingTop:"14vh",fontSize:"30px",fontFamily:'sans-serif',fontWeight:400}}>{response}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  </div>);
}


function LoginPage() {
  return (<>
    <div className='container-fluid' style={{height:"100vh",padding:0}}>
      <div className=" row backGround">
      <div className='leftPanel col-sm-8'>
          <div className='anim anim2'>
            <p >Lorem ipsum </p>
            <span>dolor sit amet</span>
          </div>
        </div>
        <div className="signInPanel col-sm-4">
          <SignInForm/>
        </div>
        
        
      </div>
    </div>
  </>);
}

const ModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    animationName: 'fade-in',
    animationDuration: '0.125s',
    animationTimingFunction: 'ease-in-out',
  },
  content: {
    
    padding:'20px',
    height:'40vh',
    width: '40vw',
    textAlign:'center',
    margin:'auto',
    animationName: 'fade-in',
    animationDuration: '0.125s',
    animationTimingFunction: 'ease-in-out',
  }

};

export default LoginPage;
