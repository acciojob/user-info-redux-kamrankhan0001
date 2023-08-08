// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  name: '',
  email: ''
};

// Action types
const UPDATE_USER = 'UPDATE_USER';

// Action creator
export const updateUser = (name, email) => {
  return {
    type: UPDATE_USER,
    payload: { name, email }
  };
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      };
    default:
      return state;
  }
};

// Create and export the store
const store = createStore(userReducer);

export default store;
