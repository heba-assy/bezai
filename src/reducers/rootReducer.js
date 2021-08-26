

const rootReducer =(state={}, action) => {
    if(action.type === "GET_USERS" ){
        return Object.assign({},state,{
            users: action.payload
        })
    }
      return state;
}
export default rootReducer;

