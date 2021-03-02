import { combineReducers } from 'redux';

import signin from './Auth/SignIn/signin.reducer';
import signup from './Auth/SignUp/signup.reducer';
import posts from './Posts/posts.reducer';

export default combineReducers({
  signin,
  signup,
  posts,
});
