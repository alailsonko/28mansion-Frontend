import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from './signup.types';

const initialState = {
  loading: false,
  session: {},
  error: '',
};

interface SignUpActionTypes {
  type: string
  payload: any
}

export default function signup(
  state = initialState,
  action: SignUpActionTypes,
) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        session: action.payload,
        error: '',
      };
    case SIGNUP_FAILURE:
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
