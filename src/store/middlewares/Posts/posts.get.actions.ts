import { Dispatch } from 'redux';
import createAPI, { getToken } from '../../../api';
import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from './posts.types';

const token = getToken();

const api = createAPI(token);

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

interface ActionDispatchType {
    type: string;
    payload?: any;
  }

export const getPostsSuccess = (getPostsData: any) => ({
  type: GET_POSTS_SUCCESS,
  payload: getPostsData,
});

export const getPostsFailure = (error: Error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

export const getPosts = (token: string) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  // actions dispatched
  dispatch(getPostsRequest());
  await api.get('/posts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => dispatch(getPostsSuccess(res.data)))
    .catch((error) => dispatch(getPostsFailure(error.message)));
};