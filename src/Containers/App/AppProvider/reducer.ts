import { AnyAction } from 'redux'

type InitialState = {
    darkModeActive: boolean
}

const initialState: InitialState = {
    darkModeActive: true
}

const appReducer = (state = initialState, action:AnyAction) => {
    switch(action.type){
        case 'ToggleDarkMode':
            state = {
                darkModeActive: !state.darkModeActive
            }
            break
        default:
            return state
    }
    return state
}

export default appReducer