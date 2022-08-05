const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isfetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isfetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isfetching: false,
        error: true,
      };

    case 'UPDATE_START':
      return {
        ...state,
        isfetching: true,
      };
    case 'UPDATE_SUCCESS':
      return {
        user: action.payload,
        isfetching: false,
        error: false,
      };
    case 'UPDATE_FAILURE':
      return {
        user: state.user,
        isfetching: false,
        error: true,
      };
    case 'LOG_OUT':
      return {
        user: null,
        isfetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
