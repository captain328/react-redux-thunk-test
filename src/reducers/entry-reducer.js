export const entryReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_ENTRIES':
            return Object.assign({}, state, {
                topEntries: action.payload,
                loading: false
            });
        case 'ADD_ENTRY':
            var topEntries = state.topEntries;
            return Object.assign({}, state, {
                topEntries: [...topEntries, action.payload],
                loading: false
            });
        case 'SET_ENTRIES_LOADING':
            return Object.assign({}, state, {
                loading: action.payload
            });
        default:
        return state;
    }
}