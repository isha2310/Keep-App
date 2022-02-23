import { Note } from "../../../types"

export const addNote = (note: Note) => {
    return {type: 'ADD_NOTE', note}
}

export const updateNote = (note: Note) => {
    return {type: 'UPDATE_NOTE', note}
}

export const archieveNote = (note: Note) => {
    return {type: 'ARCHIEVE_NOTE', note}
}

export const unarchieveNote = (archieve: Note) => {
    return {type: 'UNARCHIEVE_NOTE', archieve}
}

export const pinUnpinNote = (note: Note) => {
    return {type: 'PIN_UNPIN_NOTE', note}
}

export const pinUnpinArchieve = (archieve: Note) => {
    return {type: 'PIN_UNPIN_ARCHIEVE', archieve}
}

export const deleteNote = (note: Note) => {
    return {type: 'DELETE_NOTE', note}
}

export const deleteArchieve = (archieve: Note) => {
    return {type: 'DELETE_ARCHIEVE', archieve}
}