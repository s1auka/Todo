import { Formik } from 'formik';
import React, { FC } from 'react';
import styles from './AddField.module.css'

type propsType = {}

export const AddField: FC<propsType> = () => {
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ task: '' }}
                validate={values => {
                    let errors = { task: "" };
                    if (!values.task.trim()) {
                        errors.task = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="task"
                            placeholder="Add task..."
                            value={values.task}
                            className={errors.task && touched.task ? styles.danger : ''}
                        />
                        <button type="submit" >
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div >
    );
}