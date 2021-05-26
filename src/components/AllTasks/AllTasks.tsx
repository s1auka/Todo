import React, { FC } from "react"
import { useSelector } from "react-redux"
import { getTasks } from "../../redux/tasks-selector"
import { Task } from "./Task"

type propsType = {}

export const AllTasks: FC<propsType> = () => {
    const tasks = useSelector(getTasks)

    return (
        <>
            { tasks.map((task) => {
                return (
                    <Task key={task.id} task={task} />
                )
            })}
        </>
    )
}