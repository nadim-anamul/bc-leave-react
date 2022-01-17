import React from 'react';

const SelectInput = ({ register, options, name, ...rest }) => {
    return (
        <div className="form-item">
            <label htmlFor={rest.id}> {rest.label} </label>
            <select {...register(name)} {...rest}>
                {options.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
