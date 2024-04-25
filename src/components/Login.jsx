import React from 'react'
import Header from './Header';
import { useState,useRef } from 'react';
import { validateEmail,validatePassword } from '../utils/validations';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import{auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailAlert,setEmailAlert] = useState('border-white-500');
  const [passwordAlert,setPasswordAlert] = useState('border-white-500');
  const[validEmail,setValidEmail] = useState(false);
  const[validPassword,setValidPassword] = useState(false)
  const [isSignInForm,setIsSignInFrom] = useState(true)
  const navigate = useNavigate(); 
  const email = useRef('');
  const password = useRef('');

  function toggleSignInForm(){
    setIsSignInFrom(!isSignInForm)
  }

  function handleEmail(){
    let res = validateEmail(email.current.value)  
    if(res){
      setEmailAlert('border-red-600');
      
    }else{
      setEmailAlert('border-white-500');
      setValidEmail(true)
    } 
  }

  function handlePassword(){
    let res = validatePassword(password.current.value);
   
    if(res){
      setPasswordAlert('border-red-600')
    }else{
      setPasswordAlert('border-white-500');
      setValidPassword(true)
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    handleEmail();
    handlePassword();
    if(validEmail||validPassword){
      if(!isSignInForm){

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
          // navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error',errorMessage)
        });
      }
    }else{
      console.log('not a valid form');
      console.log(validPassword);
      console.log(validEmail)
    }
  }

  
  return (
    
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
      <form action=""  className='absolute  bg-black bg-opacity-80 p-10 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className=' font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        <input type="text" defaultValue=""
          ref={email}
          placeholder='email address'
          onBlur={handleEmail} 
          className={`p-3 my-3 w-full  bg-black  bg-opacity-60 rounded-sm border ${emailAlert}`}/>
          {emailAlert=='border-red-600' &&
          <p className='text-xs text-red-700'>Please enter a valid email address or phone number.</p>
          }
        <input type="password" defaultValue=""
          ref={password}
          placeholder='password'
          onBlur={handlePassword} 
          className={`p-3 my-3 w-full  bg-black  bg-opacity-60 rounded-sm border ${passwordAlert}`}/>
      
          
        {passwordAlert=='border-red-600' &&
          <p className='text-xs text-red-700'>Your password must contain between 6 and 18 characters.</p>
        }
        <button
            className='p-3 my-5 bg-red-600 w-full rounded-md '
            onClick={handleSubmit}
            >{isSignInForm?'Sign In':'Sign Up'}</button>

        <p className='w-full text-center'>OR</p>

        <button className='p-3 my-5 bg-white bg-opacity-20 w-full rounded-md '>Use a sign-in code</button>
        {isSignInForm &&
          <p className='w-full text-center cursor-pointer'>{'Forgot password?'}</p>}
        <p className='py-3 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm?'New to Netflix? Sign up now':'Already registered? Sign in now'}
        </p>
      </form>
    </div>
  )
}

export default Login
