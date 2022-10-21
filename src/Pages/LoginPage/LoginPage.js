import React from 'react'
import Input from '../../components/input'
import { email } from '../../utility/tools'
import "./LoginPage.css"

function LoginPage() {
  return (
    <div className='loginpage__cnt'>

        <Input labelName="Email" icon={email} />
    </div>
  )
}

export default LoginPage