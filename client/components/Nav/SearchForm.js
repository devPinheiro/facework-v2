import { Formik } from 'formik'
// import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Textbox from '@components/Textbox'

const SearchForm = ({ initialValues, onSubmit, validationSchema }) => (
    <Fragment>
        <div className="flex">
                        <Formik
                            onSubmit={onSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                isSubmitting,
                                handleBlur,
                                handleSubmit
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div class="relative text-gray-600">
                                    <Textbox
                                        className="bg-white px-5 pr-10 rounded-full text-sm focus:outline-none"
                                        type="search"
                                        name="search"
                                        label=""
                                        onBlur={handleBlur}
                                        value={values.search}
                                        onChange={handleChange}
                                        data-testid={'search-field'}
                                        error={touched.email && errors.email}
                                        placeholder="Search"
            
                                    />
                                    </div>
                                        
                                    
                                </form>
                            )}
                        </Formik>

    </div>
    </Fragment>
)

// SearchForm.propTypes = {

// }

export default SearchForm
