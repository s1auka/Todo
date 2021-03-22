import { InferActionsTypes } from './store';

const ADD_TASK = "TASKS_REDUCER/ADD_TASK"
const DELETE_TASK = "TASKS_REDUCER/DELETE_TASK"

type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


export type tasksType = {
    text: string,
    id: number,
}

const initialState = {
    tasks: [] as Array<tasksType>,
}


export const actions = {
    addTask: (text: string, id: number) => ({ type: ADD_TASK, text, id } as const),
    deleteTask: (deletedId: number) => ({ type: DELETE_TASK, deletedId } as const),
}


export const tasksReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { text: action.text, id: action.id }],
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(t => (t.id !== action.deletedId)),
            }
        default:
            return state
    }
}