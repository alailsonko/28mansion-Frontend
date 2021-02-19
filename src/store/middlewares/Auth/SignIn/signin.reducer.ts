import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from './signin.types';

const persistedData = JSON.parse(localStorage.getItem('persist:auth') as any);

let signinData = {
  session: {},
  isLogged: false,
};

if (persistedData !== null) {
  signinData = JSON.parse(persistedData.signin);
}

const initialState = {
  loading: false,
  session: signinData.session || {},
  isLogged: signinData.isLogged,
  error: '',
};

interface SignInActionTypes {
    type: string
    payload: any
}

export default function signin(
  state = initialState,
  action: SignInActionTypes,
) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        session: action.payload,
        isLogged: true,
        error: '',
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        session: {},
        isLogged: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
