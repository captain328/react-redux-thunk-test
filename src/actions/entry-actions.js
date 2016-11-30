import { entryService } from '../services';


export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
})

export const setEntryState = (entries) => ({ 
    type: 'SET_ENTRIES',
    payload: entries
});

export const addEntryState = (entry) => ({
    type: 'ADD_ENTRY', 
    payload: entry
});


export const setLoading = (val) => ({
    type: 'SET_ENTRIES_LOADING',
    payload: val
});

export function getTopEntries() {
    return function(dispatch){
        dispatch(setLoading(true))
        return entryService.getTopEntries().then(
            res => dispatch(setEntryState(res)), 
            rej => dispatch(setError('failed to get entries')))        
    }
}

export function addEntry(entry){
    return function(dispatch){
        dispatch(setLoading(true))
        return entryService.addEntry(entry).then(
            res => dispatch(addEntryState(entry)), 
            rej => dispatch(setError('failed to get entries')))        
    }
}

