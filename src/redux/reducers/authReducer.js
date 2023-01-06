import Immutable from 'seamless-immutable';
import {SIGN_IN_SUCCESS} from '../actions/types';

const INITIAL_STATE = Immutable({
  me: {},
});

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.merge(
        {
          me: action.params,
        },
        {deep: true},
      );
    default:
      return state;
  }
};

export default authReducer;
