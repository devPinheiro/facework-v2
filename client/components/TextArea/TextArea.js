import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({
    onChange,
    placeholder,
    onBlur,
    value,
    rows,
    cols,
    error,
    name,
    label,
    customStyle
}) => (
    <div className="">
        <label className="mb-4 md:text-lg text-sm text-brown-darker">{label}</label>
        <textarea
            rows={rows}
            cols={cols}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            className={`${ customStyle ? customStyle : "focus:outline-none w-full mt-2 px-4 py-3 border border-grey-light text-brown-darkest rounded-lg}"}`}
        />

        {error && (
            <span className="text-sm text-red-light mt-2 block">{error}</span>
        )}
    </div>
)

TextArea.propTypes = {
    type: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default TextArea
