const tokenReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.contents;
    default:
      return state;
  }
};

export default tokenReducer;
