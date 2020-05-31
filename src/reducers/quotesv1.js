export default (state = [], action) => {
  return state;
}
function quote (state = [], action) {
  let idx;
  switch (action.type) {
      case "ADD_QUOTE":
          return [...state, action.quote];
      case "REMOVE_QUOTE":
          idx = state.findIndex(q => q.id  === action.quoteId)
          return [...state.slice(0, idx), ...state.slice(idx + 1)];
      case "UPVOTE_QUOTE":
            idx = state.findIndex(q => q.id  === action.quoteId)
            state[idx].votes = state[idx].votes+1
          return state;
      case "DOWNVOTE_QUOTE":
            idx = state.findIndex(q => q.id  === action.quoteId)
            state[idx].votes = state[idx].votes-1
          return state;
      default:
          return state;
  }
}