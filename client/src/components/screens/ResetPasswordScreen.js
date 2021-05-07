import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/ResetPasswordScreen.css"


function ResetPasswordScreen({ match, history }) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    useEffect(() => {
        if(success) {
            history.push('/login')
        }
    }, [history, success])
  
    const resetPasswordHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      if (password !== confirmPassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords don't match");
      }
  
      try {
        const { data } = await axios.put(
          `/api/auth/resetpassword/${match.params.resetToken}`,
          {
            password,
          },
          config
        );
  
        setSuccess(data.data);
   
      } catch (error) {
        setError(error.response && error.response.data.error ?
            error.response.data.error 
            : error.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };
  
    return (
      <div className="resetpassword-screen">
        <form
          onSubmit={resetPasswordHandler}
          className="resetpassword-screen__form"
        >
          <h3 className="resetpassword-screen__title">Forgot Password</h3>
          {error && <span className="error-message">{error} </span>}
          {success && (
            <span className="success-message">
              {success}
            </span>
          )}
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              required
              id="password"
              placeholder="Enter new password"
              autoComplete="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm New Password:</label>
            <input
              type="password"
              required
              id="confirmpassword"
              placeholder="Confirm new password"
              autoComplete="true"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
    );
}

export default ResetPasswordScreen