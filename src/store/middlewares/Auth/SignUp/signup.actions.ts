import { Dispatch } from 'redux';
import createApi from '../../../../api';

import { AddAccount } from '../../../../usecases/account.interfaces';
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from './signup.types';

const api = createApi();
export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

interface ActionDispatchType {
  type: string;
  payload?: any;
}

export const signupSuccess = (signupData: AddAccount) => ({
  type: SIGNUP_SUCCESS,
  payload: signupData,
});

export const signupFailure = (error: Error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (signupData: AddAccount) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  dispatch(signupRequest());
  await api.post('/signup', signupData)
    .then((response) => dispatch(signupSuccess(response.data)))
    .catch((error) => dispatch(signupFailure(error.message)));
};
