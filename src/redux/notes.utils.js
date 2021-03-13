export const addNotes = (notes, itemToBeAdded) => {
    return[...notes,{...itemToBeAdded}]
}

export const removeNote = (notes,noteToBeDeleted) => {
    const existingNote = notes.find(note=>
        note.title === noteToBeDeleted.title
    )

    return (
        notes.filter(note=>
            note.title !== existingNote.title
        )
    )
}

