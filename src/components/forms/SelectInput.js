import React from 'react';

const SelectInput = ({ register, options, name, ...rest }) => {
    return (
        <div className="form-item">
            <label htmlFor={rest.id}> {rest.label} </label>
            <select {...register(name)} {...rest}>
                {options.length === 0 && (<option value="">Select Data</option>)}
                {options.map((value) => (
                    <option key={value.id} value={value.id}>
                        {value.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
