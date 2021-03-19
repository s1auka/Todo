import { InferActionsTypes } from './store';

const ADD_TASK = "TASKS_REDUCER/ADD_TASK"

type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const initialState = {
    tasks: [] as Array<string>,
}


export const actions = {
    addTask: (newTask: string) => ({ type: ADD_TASK, newTask }),
}


export const tasksReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.newTask],
            }
        default:
            return state
    }
}