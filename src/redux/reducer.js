
import { ADD_FAVORITES } from './actionTypes'

const initialState = {
    favorites: []
}
//how state changes for the action defined
function rootReducer(state = initialState, action) {
    if (action.type === ADD_FAVORITES) {
      state.favorites.push(action.payload);
      console.log(state.favorites);
    }
    
    return state;
  }
  
  
  export default rootReducer;