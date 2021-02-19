import {
  POSTS_FAILURE,
  POSTS_REQUEST,
  POSTS_SUCCESS,
} from './posts.types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

interface PostsActionTypes {
    type: string
    payload: any
}

export default function posts(
  state = initialState,
  action: PostsActionTypes,
) {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
