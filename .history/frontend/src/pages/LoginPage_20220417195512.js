import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    let {authTokens} = useContext(AuthContext)
    console.log(authTokens);
    return (
        <div>
           {!authTokens }
        </div>
    )
}

export default LoginPage
