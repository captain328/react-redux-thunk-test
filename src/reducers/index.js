import { entryReducer } from './entry-reducer';
import { errorReducer } from './error-reducer';
export function reducer(state = {}, action) {
    return {
        errors: errorReducer(state.errors, action),
        entries: entryReducer(state.entries, action) 
    };
} 