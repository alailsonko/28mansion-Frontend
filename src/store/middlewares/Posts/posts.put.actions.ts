/* eslint-disable arrow-body-style */
import { Dispatch } from 'redux';
import createAPI, { getToken } from '../../../api';
import {
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from './posts.types';

const token = getToken();

const api = createAPI(token);

export const updatePostRequest = () => ({
  type: UPDATE_POST_REQUEST,
});

interface ActionDispatchType {
    type: string;
    payload?: any;
  }

export const updatePostSuccess = (updatePostData: any) => ({
  type: UPDATE_POST_SUCCESS,
  payload: updatePostData,
});

export const updatePostFailure = (error: Error) => ({
  type: UPDATE_POST_FAILURE,
  payload: error,
});

export const updatePost = (updatePostData: any, id: string, tokenData = token) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  // actions dispatched
  dispatch(updatePostRequest());
  await api.put(`/posts/${id}`, updatePostData, {
    headers: {
      Authorization: `Bearer ${tokenData}`,
    },
  })
    .then((res) => {
      return dispatch(updatePostSuccess(res.data));
    })
    .catch((error) => dispatch(updatePostFailure(error.message)));
};
