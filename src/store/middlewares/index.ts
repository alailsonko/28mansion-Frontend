import { combineReducers } from 'redux';

import signin from './Auth/SignIn/signin.reducer';
import signup from './Auth/SignUp/signup.reducer';

export default combineReducers({
  signin,
  signup,
});
