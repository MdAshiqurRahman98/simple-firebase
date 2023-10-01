import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log('Error', error.message);
            });
    }

    const handleLogout = () => {
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleLogout}>Logout</button> :
                    <>
                        <button onClick={handleGoogleLogin}>Google Login</button>
                        <button onClick={handleGithubLogin}>GitHub Login</button>
                    </>
            }
            {
                user && <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;