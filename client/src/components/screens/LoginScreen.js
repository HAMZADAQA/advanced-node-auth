import React, { useEffect, useState } from 'react'
import "../../styles/LoginScreen.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

function LoginScreen({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        if(localStorage.getItem('authToken')) {
            history.push("/")
        }
    }, [history])


    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }


        try {
            const { data } = await axios.post('/api/auth/login', {email, password}, config);

            localStorage.setItem('authToken', data.token);

            history.push("/")
        } catch (error) {
            setError(error.response && error.response.data.error ?
                error.response.data.error 
                : error.error);
            setTimeout(() => {
                setError("")
            }, 5000)
        }
    }
    return (
        <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:
            {" "}<Link to="/forgotpassword" className="login-screen__forgotpassword" tabIndex={4}
            >Forgot Password?</Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary" tabIndex={3}>
          login
        </button>

        <span className="login-screen__subtext">
          Dont't have an account? <Link className="login-screen__forgotpassword" to="/register">Register</Link>
        </span>
      </form>
    </div>
    )
}

export default LoginScreen
