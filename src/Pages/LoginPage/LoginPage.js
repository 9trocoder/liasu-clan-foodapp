import React from 'react'
import Input from '../../components/input'
import { email, password } from '../../utility/tools'
import "./LoginPage.css"

function LoginPage() {
  return (
    <div className='loginpage__cnt'>
        <p className="loginpage__title">Login to <br />find the best food</p>
        <Input labelName="Email" icon={email} />
        <Input labelName="Password" icon={password} />
        <div className="loginpage__forgotpassword">
            <p className="loginpage__forgot-pass">Forgot Password?</p>
        </div>
    </div>
  )
}

export default LoginPage