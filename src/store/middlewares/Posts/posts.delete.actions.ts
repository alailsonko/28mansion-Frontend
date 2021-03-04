import { Dispatch } from 'redux';
import createAPI, { getToken } from '../../../api';
import {
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
} from './posts.types';

const token = getToken();

const api = createAPI(token);

interface ActionDispatchType {
    type: string;
    payload?: any;
  }

export const deletePostRequest = () => ({
  type: DELETE_POST_REQUEST,
});

export const deletePostSuccess = (deletePostData: any) => ({
  type: DELETE_POST_SUCCESS,
  payload: deletePostData,
});

export const deletePostFailure = (error: Error) => ({
  type: DELETE_POST_FAILURE,
  payload: error,
});

export const deletePost = (id: string, tokenData = token) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  // actions dispatched
  dispatch(deletePostRequest());
  await api.delete(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${tokenData}`,
    },
  })
    .then((res) => {
      dispatch(deletePostSuccess(res.data));
    })
    .catch((error) => dispatch(deletePostFailure(error.message)));
};
