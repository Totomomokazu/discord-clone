import React from 'react'
import "./Login.scss";
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth, provider } from '../../firebase';

const Login = () => {

    const signIn=()=>{
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // credentialがnullというエラーが出たので、コメントアウトしたらうまくいった。なぜnullかわからん
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
            }


  return (
    <div className='login'>
        <div className='loginLogo'>
            <img src='./discordIcon.png' alt=''/>
        </div>

        <Button onClick={signIn}>Login</Button>
    </div>
  )
}

export default Login
