import React from 'react';
import Card from './Card';

const TodaysLeave = (props) => {
    const todaysLeave = props.applicationData.filter(
        (application) => application.leaveDate === '2020-04-01' && application.leaveStatus === 'Approved'
    );

    return (
        <>
            {todaysLeave.length > 0 && (
                <div className="currentDayLeave">
                    <h2>Employee on Leave Today</h2>
                    <div className="gridRow">
                        {todaysLeave.map((leave) => (
                            <Card
                                key={leave.id}
                                application={leave}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default TodaysLeave;
