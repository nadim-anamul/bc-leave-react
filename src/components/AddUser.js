import React from 'react';
import TextInput from './forms/TextInput';
import { useForm } from 'react-hook-form';

const AddUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <div className="container">
            <h1>Details of Employee</h1>
            <div className="book__form">
                <form
                    method="post"
                    className="form empForm"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextInput
                        label="Full Name"
                        name="name"
                        type="text"
                        register={register}
                        rules={{
                            required: 'field is required',
                        }}
                        errors={errors}
                    />

                    <div className="form-item">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="designation">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            id="designation"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="team">Team</label>
                        <select name="team" id="team">
                            <option value="Web">Web</option>
                            <option value="iOS">iOS</option>
                            <option value="android">Android</option>
                            <option value="hr">HR</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="supervisor">Supervisor</label>
                        <input
                            type="text"
                            name="supervisor"
                            id="supervisor"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="nid">NID</label>
                        <input
                            type="text"
                            name="nid"
                            id="nid"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="nidFile">NID File</label>
                        <input
                            type="file"
                            name="nidFile"
                            id="nidFile"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="bloodGroup">Blood Group</label>
                        <input
                            type="text"
                            name="bloodGroup"
                            id="bloodGroup"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="presentAddress">Present Address</label>
                        <textarea
                            name="presentAddress"
                            id="presentAddress"
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="permanentAddress">
                            Permanent Address
                        </label>
                        <textarea
                            name="permanentAddress"
                            id="permanentAddress"
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="emergencyContact">
                            Emergency Contact
                        </label>
                        <textarea
                            name="emergencyContact"
                            id="emergencyContact"
                        ></textarea>
                    </div>

                    <div className="form-item">
                        <label htmlFor="joinDate">Join Date</label>
                        <input
                            type="date"
                            name="joinDate"
                            id="joinDate"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="profilePic">Profile Pic</label>
                        <input
                            type="file"
                            name="profilePic"
                            id="profilePic"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="dob">DOB</label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="terminationDate">
                            Date of Termination
                        </label>
                        <input
                            type="date"
                            name="terminationDate"
                            id="terminationDate"
                            className="field_sm"
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="totalLeave">Total Leave</label>
                        <input
                            type="text"
                            name="totalLeave"
                            id="totalLeave"
                            className="field_sm"
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="empStatus">Employee Status</label>
                        <select name="empStatus" id="empStatus">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <input
                            className="btn btn-primary"
                            type="submit"
                            name="submit"
                            value="Save"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
