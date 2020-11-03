import { Dispatch } from 'redux';
import api from '../../../../api';
import { LoginData } from '../../../../usecases/LoginData';
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from './signin.types';

export const signinRequest = () => ({
  type: SIGNIN_REQUEST,
});

interface ActionDispatchType {
    type: string;
    payload?: any;
  }

export const signinSuccess = (signinData: LoginData) => ({
  type: SIGNIN_SUCCESS,
  payload: signinData,
});

export const signinFailure = (error: Error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

export const signin = (signinData: LoginData) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  // actions dispatched
  dispatch(signinRequest());
  await api.post('/signin', signinData)
    .then((data) => console.log(data));
};
