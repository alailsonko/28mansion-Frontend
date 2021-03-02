import { Dispatch } from 'redux';
import createAPI, { getToken } from '../../../api';
import {
  SAVE_POST_FAILURE,
  SAVE_POST_REQUEST,
  SAVE_POST_SUCCESS,
} from './posts.types';

const token = getToken();

const api = createAPI(token);

export const savePostRequest = () => ({
  type: SAVE_POST_REQUEST,
});

interface ActionDispatchType {
    type: string;
    payload?: any;
  }

export const savePostSuccess = (savePostData: any) => ({
  type: SAVE_POST_SUCCESS,
  payload: savePostData,
});

export const savePostFailure = (error: Error) => ({
  type: SAVE_POST_FAILURE,
  payload: error,
});

export const savePost = (savePostData: any, tokenData = token) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  // actions dispatched
  dispatch(savePostRequest());
  await api.post('/posts', savePostData, {
    headers: {
      Authorization: `Bearer ${tokenData}`,
    },
  })
    .then((res) => dispatch(savePostSuccess(res.data)))
    .catch((error) => dispatch(savePostFailure(error.message)));
};
