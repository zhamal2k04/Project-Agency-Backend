import React from 'react'
import {auth, provider} from "./SignInConfig"
import { signInWithPopup } from 'firebase/auth'
import { useState, useEffect } from 'react'
import LogOut from './LogOut/LogOut'
import {FcGoogle} from 'react-icons/fc'

const SignIn = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("Email", data.user.email)
            window.location.replace("https://zhamal2k04.github.io/Project--Agency/home")
        })
    }
    
    useEffect(() => {
        setValue(localStorage.getItem("Email"))
    })

    return (
    <div>
        {value ? <LogOut/> :
            <button onClick={handleClick} className='border shadow-lg hover:shadow-xl cursor-pointer px-6 py-2 relative flex items-center'><FcGoogle className='mr-2'/> Google</button>
        }
    </div>
  )
}

export default SignIn