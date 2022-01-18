import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card dash-widget leaveCard shadow-sm">
            <div className="card-body">
                {props.application.name && <h4>{props.application.name}</h4>}
                {props.application.team && (
                    <p>Team: {props.application.team}</p>
                )}
                {props.application.leaveDate && (
                    <p>Leave: {props.application.leaveDate}</p>
                )}
                {props.application.leaveType && (
                    <p>Leave Type: {props.application.leaveType}</p>
                )}
                {props.application.supervisor && (
                    <p>Supervisor: {props.application.supervisor}</p>
                )}
                {props.application.designation && (
                    <p>Designation: {props.application.designation}</p>
                )}
                {props.application.contactNumber && (
                    <p>Phone: {props.application.contactNumber}</p>
                )}
                {props.leaveLink && (
                    <Link to={props.leaveLink} className='btn'>View Details</Link>
                )}
            </div>
        </div>
    );
};

export default Card;
