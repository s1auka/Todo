import { tasksReducer } from './tasks-reducer';
import { combineReducers, createStore } from "redux"


const reducers = combineReducers({
    tasksReducer,
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(reducers)