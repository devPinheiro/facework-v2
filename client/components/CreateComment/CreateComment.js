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
        <div className="px-1 py-1">
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
                    <form className="flex" onSubmit={handleSubmit}>
                       <div className="w-4/5 pl-2">
                        <TextArea
                            customStyle="focus:outline-none w-full py-1 px-1 bg-brown-lightest text-brown rounded-lg"
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
                        </div>
                        <div className="w-1/5 py-4 px-2">
                        <Button
                        className="w-1/3"
                            type="submit"
                            loading={isSubmitting}
                            data-testid="submit-button"
                            style="h-2 bg-none"
                        ><p>POST</p></Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default CreateComment
