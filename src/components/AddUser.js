import React from 'react';
import TextInput from './forms/TextInput';
import { useForm } from 'react-hook-form';
import SelectInput from './forms/SelectInput';
import TextAreaInput from './forms/TextAreaInput';

import { apiClient } from '../api';

const AddUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await apiClient
            .post('/emp/add', {
                ...data,
                nid: data?.nid[0].name,
                image: data?.image[0].name,
            })
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    const teamData = [
        {
            id:'61da675e4628fc6a0eadd3e2',
            name: 'Web'
        }
    ]
    const designation = [
        {
            id:'61da675e4628fc6a0eadd3e2',
            name: 'HR'
        }
    ]

    return (
        <main>
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
                            name="fullName"
                            id="fullName"
                            type="text"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        <TextInput
                            label="Phone Number"
                            name="contactNumber"
                            id="contactNumber"
                            type="text"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        <TextInput
                            label="Email Address"
                            name="email"
                            id="email"
                            type="email"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        {/* <TextInput
                        label="Designation"
                        name="designation"
                        id="designation"
                        type="text"
                        register={register}
                        rules={{
                            required: '*field is required',
                        }}
                        errors={errors}
                    /> */}
                        <SelectInput
                            label="Team"
                            name="teamId"
                            id="teamId"
                            options={teamData}
                            register={register}
                        />
                        <SelectInput
                            label="Team"
                            name="designation"
                            id="designation"
                            options={designation}
                            register={register}
                        />
                        <TextInput
                            label="Supervisor"
                            name="supervisorName"
                            id="supervisorName"
                            type="text"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        <TextInput
                            label="NID"
                            name="nationalIdNumber"
                            id="nationalIdNumber"
                            type="text"
                            register={register}
                        />
                        <TextInput
                            label="NID File"
                            name="nid"
                            id="nid"
                            type="file"
                            register={register}
                        />
                        <TextInput
                            label="Blood Group"
                            name="bloodGroup"
                            id="bloodGroup"
                            type="text"
                            register={register}
                        />
                        <TextAreaInput
                            label="Present Address"
                            name="presentAddress"
                            id="presentAddress"
                            register={register}
                        />
                        <TextAreaInput
                            label="Permanent Address"
                            name="permanentAddress"
                            id="permanentAddress"
                            register={register}
                        />
                        <TextInput
                            label="Emergency Contact"
                            name="emergencyContactDetails"
                            id="emergencyContactDetails"
                            type="text"
                            register={register}
                        />
                        <TextInput
                            label="Join Date"
                            name="joiningDate"
                            id="joiningDate"
                            type="date"
                            register={register}
                        />
                        <TextInput
                            label="Profile Pic"
                            name="image"
                            id="image"
                            type="file"
                            register={register}
                        />
                        <TextInput
                            label="DOB"
                            name="dob"
                            id="dob"
                            type="date"
                            register={register}
                        />
                        <TextInput
                            label="Date of Termination"
                            name="dateOfTermination"
                            id="dateOfTermination"
                            type="date"
                            register={register}
                        />
                        <TextInput
                            label="Total Leave"
                            name="totalLeave"
                            id="totalLeave"
                            type="number"
                            register={register}
                        />
                        <SelectInput
                            label="Employee Status"
                            name="isActive"
                            id="isActive"
                            options={[{name:'Active',id:1}, {name:'Inactive',id:0}]}
                            register={register}
                        />
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
        </main>
    );
};

export default AddUser;
