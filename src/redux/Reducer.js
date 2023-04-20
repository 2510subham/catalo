import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer
});

export default store;
