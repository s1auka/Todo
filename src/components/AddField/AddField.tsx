import { Formik } from 'formik';
import React, { FC } from 'react';
import styles from './AddField.module.css'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/tasks-reducer';

type propsType = {}

export const AddField: FC<propsType> = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>TODO LIST</h1>
            <Formik
                initialValues={{ task: '' }}
                validate={values => {
                    const errors = { task: '' };
                    if (!values.task.trim()) {
                        errors.task = "Required";
                        return errors;
                    }
                    return {};
                }}
                onSubmit={(values, { resetForm }) => {
                    dispatch(actions.addTask(values.task, new Date().getTime()))
                    resetForm({})
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="task"
                            placeholder="Add task..."
                            value={values.task}
                            onChange={handleChange}
                            className={errors.task && touched.task ? styles.danger : ''}
                        />

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div >
    );
}