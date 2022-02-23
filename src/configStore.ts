import { combineReducers, compose, createStore } from "redux";
import appReducer from "./Containers/App/AppProvider/reducer";
import notesReducer from "./Containers/Notes/NotesProvider/reducer";

const rootReducer = combineReducers({
    app: appReducer,
    notes: notesReducer
})

const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  )|| compose;
  
const store = createStore(rootReducer, composeEnhancers());
  
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch