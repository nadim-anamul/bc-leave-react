import React from 'react';
import { useAuth } from '../context/AuthContext';
import AdminSummary from './AdminSummary';
import PendingLeave from './PendingLeave';
import TodaysLeave from './TodaysLeave';
//import { apiClient } from '../api';

const Home = (props) => {
    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     await apiClient.post('/api/leave/approve', {
    //         id: e.target.id.value,
    //         status: e.target.status.value
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // };

    const { getUser, values } = useAuth;
    console.log('getUser', getUser, values);

    return (
        <div className="container">
            <AdminSummary
                applicationData={props.applicationData}
            ></AdminSummary>
            <PendingLeave
                applicationData={props.applicationData}
            ></PendingLeave>
            <TodaysLeave applicationData={props.applicationData}></TodaysLeave>
        </div>
    );
};

export default Home;
