import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google');
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;