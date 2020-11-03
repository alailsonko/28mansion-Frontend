import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from './signin.types';

const initialState = {
  loading: false,
  session: {},
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
        error: '',
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        session: {},
        error: action.payload,
      };

    default:
      return state;
  }
}
