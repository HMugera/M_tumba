import  React from 'react'

import './login-and-register.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const LoginRegister =() =>(
    <div className="loginRegister">
        <SignIn/>
        <SignUp/>
    </div>
)

export default LoginRegister;