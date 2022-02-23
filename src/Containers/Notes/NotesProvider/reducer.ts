import { AnyAction } from 'redux'
import { Note } from '../../../types'

interface InitialState {
    notes: {[id: string]: Note},
    archieves: {[id: string]: Note},
}

const initialState: InitialState = {
    notes: {},
    archieves: {}
}

const notesReducer = (state = initialState, action: AnyAction) => {
    switch(action.type){
        case 'ADD_NOTE':
            state.notes = {
                ...state.notes,
                [action.note.id]: action.note
            }
            break
        case 'UPDATE_NOTE':
            let note = state.notes[action.note.id]
            state.notes[action.note.id] = {...note,...action.note}
            break;
        case 'ARCHIEVE_NOTE':
            delete state.notes[action.note.id]
            state.archieves = {
                ...state.archieves,
                [action.note.id]: action.note
            }
            break
        case 'UNARCHIEVE_NOTE':
            delete state.archieves[action.archieve.id]
            state.notes = {
                ...state.notes,
                [action.archieve.id]: action.archieve
            }
            break
        case 'PIN_UNPIN_NOTE':
            state.notes[action.note.id].isPinned = !state.notes[action.note.id].isPinned
            break
        case 'PIN_UNPIN_ARCHIEVE':
            state.archieves[action.archieve.id].isPinned = !state.archieves[action.archieve.id].isPinned
            break
        case 'DELETE_NOTE':
            delete state.notes[action.noteId]
            break
        case 'DELETE_ARCHIEVE':
            delete state.archieves[action.archieveId]
            break
        default:
            return state
    }
    return state
}

export default notesReducer