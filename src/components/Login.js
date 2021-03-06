import React from 'react'
import firebase from "./firebase"
import "./Login.css"

const Login = (props) => {
    const loginWithGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope("profile")
        provider.addScope("email")

        firebase.auth()
        .signInWithPopup(provider)
            .catch( (error) => 
                console.log(error)
            )
    }

    const logOut = () => {
        firebase.auth().signOut()
    }

    return(
     <main className="login">
         {
            !props.signedIn &&

            <button className='loginButton' onClick={loginWithGoogle}>Log in</button>
         }
         {
            props.signedIn &&
            <>
                <h1>You are logged in</h1>
                <p>Welcome {firebase.auth().currentUser.displayName}</p>
                {
                firebase.auth().currentUser.photoURL &&
                    <img alt="profile img" src={firebase.auth().currentUser.photoURL} />
                }
                <button onClick={logOut}>Log out</button>
            </>

         }
     </main>
    )
}

export default Login