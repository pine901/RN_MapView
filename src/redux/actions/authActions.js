import {ReduxActionDefaultParamDataType} from '../../@types/app';
import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_SUCCESS} from './types';

export const signIn = ({
  params,
  onSuccess,
  onFail,
}: ReduxActionDefaultParamDataType) => ({
  type: SIGN_IN,
  params,
  onSuccess,
  onFail,
});

export const signInSuccess = (params: any) => ({
  type: SIGN_IN_SUCCESS,
  params,
});
