import React from 'react';

const TextInput = ({ label, rules, errors, register, ...rest }, props) => {
    return (
        <div className="form-item">
            <label htmlFor={rest.id}> {label} </label>
            <input
                {...rest}
                className="field_sm"
                {...register(rest.name, rules)}
            />
            {errors?.name && (
                <span className="error">{errors?.name.message}</span>
            )}
        </div>
    );
};

export default TextInput;
