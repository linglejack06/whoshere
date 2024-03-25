const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'all':
      return action.contents;
    default:
      return state;
  }
};

export default ticketReducer;
