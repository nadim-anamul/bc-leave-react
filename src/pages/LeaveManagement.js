import React from 'react';
import PendingLeave from '../components/PendingLeave';

const LeaveManagement = (props) => {
    return (
        <main>
            <div className="container">
                <PendingLeave
                    applicationData={props.applicationData}
                ></PendingLeave>
            </div>
        </main>
    );
};

export default LeaveManagement;
