import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  SAVE_POST_FAILURE,
  SAVE_POST_REQUEST,
  SAVE_POST_SUCCESS,
} from './posts.types';

const initialState = {
  loading: false,
  data: [],
  success: '',
  error: '',
};

interface PostsActionTypes {
    type: string
    payload: any
}

export default function getPosts(
  state = initialState,
  action: PostsActionTypes,
) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case SAVE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: '',
      };
    case SAVE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        success: '',
        error: action.payload,
      };

    default:
      return state;
  }
}
