export const addNotes = note =>({
    type:'ADD_NOTES',
    payload:note
});

export const toggleHidden = () =>({
    type: 'TOGGLE_HIDDEN'
});

export const removeNote = note =>({
    type: 'REMOVE_NOTE',
    payload:note
});
