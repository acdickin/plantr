export default function createReducer(initialState,handlers){
  return function reducer(state=initialState,action){
    if(handlers.hasOwnProperty(Action.type)){
      return handlers[action.type](state,action)
    } else{
      return state
    }
  }
}
