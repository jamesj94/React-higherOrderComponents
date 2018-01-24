//The purpose of this reducer is to
//return a boolean value

import { CHANGE_AUTH } from '../actions/types';
//first parameter of a reducer
//is state. Default set to not logged in
export default function(state = false, action){
  //checks if type is true or false
  switch(action.type){
    case CHANGE_AUTH:
      return action.payload;
  }
  return state;
}
