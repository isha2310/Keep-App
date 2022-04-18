import { Note } from '../../../types';

export const addNote = (note: Note) => ({ type: 'ADD_NOTE', note });

export const updateNote = (note: Note) => ({ type: 'UPDATE_NOTE', note });

export const archieveNote = (note: Note) => ({ type: 'ARCHIEVE_NOTE', note });

export const unarchieveNote = (archieve: Note) => ({ type: 'UNARCHIEVE_NOTE', archieve });

export const pinUnpinNote = (note: Note) => ({ type: 'PIN_UNPIN_NOTE', note });

export const pinUnpinArchieve = (archieve: Note) => ({ type: 'PIN_UNPIN_ARCHIEVE', archieve });

export const deleteNote = (note: Note) => ({ type: 'DELETE_NOTE', note });

export const deleteArchieve = (archieve: Note) => ({ type: 'DELETE_ARCHIEVE', archieve });
