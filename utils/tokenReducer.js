const tokenReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return `Bearer ${action.contents}`;
    default:
      return state;
  }
};

export default tokenReducer;
