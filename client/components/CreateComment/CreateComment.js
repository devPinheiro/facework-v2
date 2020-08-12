import React from 'react'
import { Formik } from 'formik'

// components
import Button from '@components/Button'
import TextArea from '@components/TextArea'

// Assets
import Camera from '../../assets/image/camera.svg'

const CreateComment = ({onSubmit,
    initialValues,
    validationSchema}) => {
    return (
        <div className="px-4 py-4">
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    isValid,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form className="flex flex-row justify-between" onSubmit={handleSubmit}>
                        <TextArea
                            type="body"
                            label=""
                            rows={0}
                            onBlur={handleBlur}
                            value={values.body}
                            onChange={handleChange}
                            data-testid={'body-field'}
                            placeholder={'Comment'}
                            error={touched.body && errors.body}
                        />

                        <Button
                            type="submit"
                            loading={isSubmitting}
                            data-testid="submit-button"
                            style="h-2 bg-none"
                        ><Camera /></Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default CreateComment
