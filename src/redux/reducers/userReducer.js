import userActionTypes from '../actionTypes/userActionTypes'
// Each specific reducer must have an initial state, just like how state has in a component
const userState = {
  user: null,
  error: null
}

// A reducer is like an action and a mutation (VUEX) thing combined
// Firstly it has this currentState param, just like any action and mutation would have
// Secondly it holds on to the action itself. An action comes with the type prop and the payload
// All reducers get triggered whenever an action is called. So inorder to avoid that, we check
// whether the type matches and if so, then allow the mutation to the state (creating a new object and assigning it in the root reducer)
// Else just return the currentState, without any changes. (By this we can stop re rendering of the component for no uses)

const userReducer = (currentState = userState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return { ...currentState, user: action.payload, error: null }
    case userActionTypes.SET_AUTH_ERROR:
      return { ...currentState, error: action.payload }
    default:
      return currentState
  }
}

export default userReducer
