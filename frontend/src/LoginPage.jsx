import React, { useState } from 'react';
import './LoginPage.css';
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Make sure the data is sent correctly
          console.log({ email, password });
      
          // Make a POST request to your server with user data
          const response = await axios.post('/login', { email, password });
      
          // Handle the response (you can show a success message or redirect the user)
          console.log(response.data);
        } catch (error) {
          // Handle errors (show an error message to the user)
          console.error(error);
        }
      };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={emailHandler} name='email' placeholder='email' value={email} />
                <input type="password" onChange={passwordHandler} name='password' placeholder='password' value={password} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default LoginPage;
