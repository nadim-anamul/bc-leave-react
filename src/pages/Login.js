import { useAuth } from '../context/AuthContext';
import style from './Login.module.css';

const Login = () => {

    const {values} =useAuth();
    console.log('bfsjdhfjsh',values);
    
    const msg = sessionStorage.getItem('failed');
    sessionStorage.removeItem('failed');

    return (
        <div className={style.gBody}>
            {msg && <p>{msg}</p>}
            <button className={style.gButton}>
                <img
                    className={style.gLogo}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"
                    alt="Google Logo"
                />
                <a
                    className={style.gText}
                    href={'http://localhost:5000/login/auth/google'}
                >
                    Login with Google
                </a>
            </button>
        </div>
        // <div className={Classes.container}>

        //     <div className={Classes.loginBox}>
        //         <p>{msg}</p>
        //         <h1 className="txtDesign">Login</h1>
        //         <a
        //         href={'http://localhost:5000/login/auth/google'}
        //         className={Classes.btnDesign}
        //         >
        //             Google login
        //         </a>
        //     </div>

        // </div>
    );
};

export default Login;
