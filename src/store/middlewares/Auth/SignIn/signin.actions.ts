import { Dispatch } from 'redux';
import createApi from '../../../../api';
import { LoginData } from '../../../../usecases/account.interfaces';
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from './signin.types';

const api = createApi();
export const signinRequest = () => ({
  type: SIGNIN_REQUEST,
});

interface ActionDispatchType {
    type: string;
    payload?: any;
  }

export const signinSuccess = (signedData: any) => ({
  type: SIGNIN_SUCCESS,
  payload: signedData.data,
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
    .then((data) => dispatch(signinSuccess(data)));
};
