import React,{useEffect,useState} from 'react'
import { auth } from '../utils/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {   signOut } from "firebase/auth";
import {netflix_logo,user_icon} from '../utils/API_requests'

const Header = () => {
  
  const navigate = useNavigate();
  const [loggedIn,setLoggedIn] = useState(false)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user',user)
        const uid = user.uid; 
        setLoggedIn(!loggedIn);
        navigate('/browse')
      } else {
        navigate('/')
      }
    });

    return ()=> unsubscribe();
  },[])
  
  function handleSignOut(){
   
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        navigate('/error')
      });
  }
  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between overflow-x-hidden'>
      <div className='flex'>
        <img
        className='w-44'
        src={netflix_logo} alt="logo" />
        {loggedIn &&<div className='flex space-x-4 items-center text-white'>
          <div>Home</div>
          <div>TV Shows</div>
          <div>Movies</div>
          <div>New & Popular</div>
          <div>My List</div>
          <div>Browse by Languages</div>
        </div>}
      </div>
     
       {loggedIn && <div className='flex p-2 items-center'>
        <img className='w-10 h-10 mr-3' src={user_icon} alt="user_icon" />
        <button onClick={handleSignOut} className='bg-red-600 px-4 py-2 text-xs text-white font-bold rounded'>{'Sign Out'}</button>
       </div>}
    </div>
  )
}

export default Header
