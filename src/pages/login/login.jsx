import { getUsers } from "../../utils/localStorage";
import styles from './login.module.css';
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { 
  emailState,
  passwordState,
  emailErrorState,
  passErrorState,
  matchState,
  // logInOut 
  } from "../../atoms/atoms";
import { useRecoilState } from "recoil";

export function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState)

  const [emailError, setEmailError] = useRecoilState(emailErrorState)
  const [passError, setPassError] = useRecoilState(passErrorState)
  const [match, setMatch] = useRecoilState(matchState)
  
  const navigate = useNavigate();


  function validateUserEmail() {
    const regex = /^\S+@\S+\.\S+$/;

    if(!email) {
        setEmailError('email is required');
        return false;
    } else if(!regex.test(email)) {
        setEmailError("It should be a valid email address");
        return false;
    } else {
        setEmailError('');
        return true;
    }
  }

  function validatePassword() {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    if(!password) {
        setPassError("password is required");
        return false;
    } else if(!regex.test(password)) {
        setPassError('password should be 8 to 20 characters and include at least 1 number, 1 letter and 1 special character');
        return false;
    } else {
        setPassError('');
        return true;
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    const isUserEmailValid = validateUserEmail()
    const isUserPasswordValid = validatePassword()

    const users = getUsers();

    if(isUserEmailValid && isUserPasswordValid) {
        let details = users.find( (user) => (
            user.email === email && user.password === password
        ))

        let nameIndex = users.findIndex( (user) => (
          user.email === email && user.password === password
      ))
      localStorage.setItem('loginName', JSON.stringify(users[nameIndex].name))

    if(details && isUserEmailValid && isUserPasswordValid) {
        localStorage.setItem('isLogin', JSON.stringify(true))
        navigate('/')
    } else {
        setMatch('Please Register')
    }
}
    // setName('');
    setEmail('');
    setPassword('')
  }

  function handleNoAcc() {
    navigate('/register')
    setMatch('')
  }

  return (
    <div className={styles.Logcontainer}>
        
        
      <div className={styles.formContainer}>
      {<span className={styles.errMsg}>{match}</span>}
      <form className={styles.formLog} onSubmit={handleSubmit}>
      <BsTwitter style={{color:"white"}}/>

        <h2 className={styles.headSign}>Sign in to twitter</h2>

        <button className={styles.btn}><FcGoogle />Sign in with Google</button>
        <button className={styles.btn}><BsApple />Sign in with Apple</button>

        <span className={styles.hr}/>

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          className={styles.inputlog}
        />
        {<span className={styles.errMsg}>{emailError}</span>}

        <input
            type='password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            placeholder="password"
            className={styles.inputlog}
        />
        {<span className={styles.errMsg}>{passError}</span>}

        <button className={styles.btn} type="submit">Login</button>

        <button className={styles.btnd}>Forgot password?</button>
        <p className={styles.noAcc}>Don't have an account?<span onClick={handleNoAcc} className={styles.signup}>Sign up</span></p>
      </form>
      </div>
    </div>
  );
}