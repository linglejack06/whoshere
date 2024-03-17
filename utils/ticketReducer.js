const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'all':
      return action.contents;
    default:
      return action.contents;
  }
};

export default ticketReducer;
