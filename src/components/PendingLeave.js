import React from 'react';
import Card from './Card';

const PendingLeave = (props) => {
    const pendingLeave = props.applicationData.filter(
        (application) => application.leaveStatus === 'Pending'
    );

    return (
        <>
            {pendingLeave.length > 0 && (
                <div className="pendingLeave">
                    <h2>Pending Leave applications</h2>
                    <div className="gridRow">
                        {pendingLeave.map((application) => (
                            <Card
                                key={application.id}
                                application={application}
                                leaveLink={`/leave-review/${application.id}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default PendingLeave;
