import { addNotes,removeNote } from './notes.utils';

const INITIAL_STATE = {
    hidden:true,
    notes:[]
}

const notesReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case "ADD_NOTES":
            return{
                ...state,
                notes:addNotes(state.notes,action.payload)
            }
        case "TOGGLE_HIDDEN":
            return{
                ...state,
                hidden:!state.hidden
            }
        case "REMOVE_NOTE":
            return{
                ...state,
                notes:removeNote(state.notes,action.payload)
            }
        default:
            return state;
    }
}

export default notesReducer;