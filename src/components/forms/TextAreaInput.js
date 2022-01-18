import React from 'react';

const TextAreaInput = ({ label, register, ...rest }, props) => {
    return (
        <div className="form-item">
            <label htmlFor={rest.id}> {label} </label>
            <textarea
                {...rest}
                {...register(rest.name)}
            />
        </div>
    );
};

export default TextAreaInput;
