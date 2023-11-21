import React from 'react'
import {auth2, provider2} from "./SigninConfig"
import { signInWithPopup } from 'firebase/auth'
import { useState,useEffect } from 'react'
import LogOut from './Logout/LogOut'
import {AiFillFacebook} from "react-icons/ai"

const SigninIn = () => {
    const [value, setValue] = useState('')

    const handleClick2 = () =>{
        signInWithPopup(auth2,provider2).then((result) =>{
            setValue(result.user);
            localStorage.setItem('UserID', result.user.providerData[0].uid)
            window.location.replace('https://zhamal2k04.github.io/Project--Agency#/home')
           
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    useEffect(() =>{
        setValue(localStorage.getItem("UserID"))
    })

    return (
    <div>
        {value ? <LogOut/> :
            <button onClick={handleClick2} className='border shadow-lg hover:shadow-xl cursor-pointer px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2'/>Facebook</button>
        }
    </div>
  )
}

export default SigninIn;