import { FC } from "react"
import { useDispatch } from "react-redux"
import { actions, tasksType } from "../../redux/tasks-reducer"
import styles from "./AllTasks.module.css"

type propsType = { task: tasksType }

export const Task: FC<propsType> = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.task}>
            <div>{task.text}</div>
            <div className={styles.delete} onClick={() => dispatch(actions.deleteTask(task.id))}>X</div>
        </div>
    )
}