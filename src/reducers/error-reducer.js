export const errorReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_ERROR':
            return Object.assign({}, state, {
                errors: [action.payload]
            });
        case 'CLEAR_ERROR':
            return Object.assign({}, state, {
                errors: null
            });
        default:
        return state;
    }
}