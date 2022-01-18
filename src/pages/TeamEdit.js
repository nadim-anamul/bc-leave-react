import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../components/forms/TextInput';
import SelectInput from '../components/forms/SelectInput';
import { apiClient } from '../api';

const TeamEdit = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await apiClient
            .post('/team/add', data)
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
                <h1>Details of Team</h1>
                <div className="book__form">
                    <form
                        method="post"
                        className="form teamForm"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextInput
                            label="Team Name"
                            name="teamName"
                            id="teamName"
                            type="text"
                            register={register}
                            rules={{
                                required: '*field is required',
                            }}
                            errors={errors}
                        />
                        <SelectInput
                            label="Team Name"
                            name="teamStatus"
                            id="teamStatus"
                            options={['Active', 'Inactive']}
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

export default TeamEdit;
