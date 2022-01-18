import React from 'react';

const LeaveReview = () => {
    const leaveData = {
        name: 'Anamul Hasan Nadim',
        team: 'Web',
        leaveType: 'Casual',
        startDate: '2020-01-01',
        endDate: '2020-01-01',
        reason: `I wish to apply for 1 working day leave on
        23-08-2021 for a personal reason. I would like to
        have your approval on my leave of 1 day. Looking
        forward to a positive reply at the earliest!`,
    };
    return (
        <main>
            <div className="container">
                <h1>Review Leave Application of Nadim</h1>
                <div className="leaveInfo">
                    <div className="leaveInfo-item">
                        <h3>Name:</h3>
                        <p>{leaveData.name}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Team:</h3>
                        <p>{leaveData.team}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Leave Type:</h3>
                        <p>{leaveData.leaveType}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Start Date:</h3>
                        <p>{leaveData.startDate}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>End Date:</h3>
                        <p>{leaveData.endDate}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Reason:</h3>
                        <p>{leaveData.reasons}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Status:</h3>
                        <select
                            name="leaveStatus"
                            id="leaveStaus"
                            className="leaveStatusInput"
                        >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LeaveReview;
