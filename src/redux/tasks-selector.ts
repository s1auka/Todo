import { createSelector } from "reselect";
import { AppStateType } from "./store";

const getTasksSelector = (state: AppStateType) => {
    return state.tasksReducer.tasks;
}

export const getTasks = createSelector(getTasksSelector,
    (tasks) => {
        return tasks.filter(task => true);
    })