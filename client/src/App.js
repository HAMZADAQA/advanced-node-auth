import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen';


const App = () =>  {
  return (
    <Router>
        <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/forgotPassword" component={ForgotPasswordScreen} />
          <Route exact path="/resetpassword/:resetToken" component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
