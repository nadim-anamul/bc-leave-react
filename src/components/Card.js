import React from 'react';

const Card = (props) => {
    return (
        <div className="card dash-widget leaveCard shadow-sm">
            <div className="card-body">
                {props.application.name && <h4>{props.application.name}</h4> }
                {props.application.team && <p>Team: {props.application.team}</p> }
                {props.application.leaveDate && <p>Leave: {props.application.leaveDate}</p> }
                {props.application.leaveType && <p>Leave Type: {props.application.leaveType}</p> }
            </div>
        </div>
    );
};

export default Card;
