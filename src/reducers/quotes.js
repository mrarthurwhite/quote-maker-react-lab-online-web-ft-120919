export default (state = [], action) => {
  let idx;
  // this returns it back to the store in redux (global store's state object)
  switch (action.type) {
      case("ADD_QUOTE"):
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
            if (state[idx].votes>0) {
              state[idx].votes = state[idx].votes-1
            }
          return state;
      default:
          return state;
  }
}