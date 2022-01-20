import React from 'react';
import { useForm } from 'react-hook-form';
import SelectInput from '../components/forms/SelectInput';
import TextInput from '../components/forms/TextInput';
import TextAreaInput from '../components/forms/TextAreaInput';
import { apiClient } from '../api';

const LeaveApplication = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await apiClient
            .post('/emp/leave', data)
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    return (
        <main>
            <div className="container">
                <h1>Apply For Leave</h1>
                <div className="book__form">
                    <form
                        method="post"
                        className="form leaveForm"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextInput
                            label="Date Form"
                            name="startDate"
                            id="startDate"
                            type="Date"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        <TextInput
                            label="Date To"
                            name="endDate"
                            id="endDate"
                            type="Date"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        <TextAreaInput
                            label="Reason"
                            name="reason"
                            id="reason"
                            register={register}
                        />

                        <SelectInput
                            label="Leave Type"
                            name="leaveType"
                            id="leaveType"
                            options={[
                                { name: 'Casual', id: 0 },
                                { name: 'Sick', id: 1 },
                                { name: 'Family', id: 2 },
                            ]}
                            register={register}
                        />

                        <div className="form-item">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                name="submit"
                                value="Apply"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LeaveApplication;
