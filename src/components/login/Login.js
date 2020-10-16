import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {auth , provider} from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTyes } from '../../reducer'

function Login() {

    const [state , dispatch] = useStateValue();

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type:actionTyes.SET_USER,
                user: result.user
            })

        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div className="login" >
            <div className="login_container">
            <img src='https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg' alt="" />
            <h1>Sign In to Duplicate Slack </h1>
            <p>This is the first clone  version of slack </p>
            <Button onClick={signIn} > Sign In With Google </Button>

            </div>
        </div>
    )
}

export default Login
