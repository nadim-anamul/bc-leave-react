import React from 'react';
import { Link } from 'react-router-dom';

const CardSummary = (props) => {
    return (
        <div className="card dash-widget shadow-sm">
            <div className="card-body">
                <div className="card-icon bg-primary">
                    <i className="fas fa-users" aria-hidden="true"></i>
                </div>
                <div className="card-right">
                    {props.data.name && (
                        <h4 className="card-title">{props.data.name}</h4>
                    )}
                    {props.data.teamStatus && (
                        <p>Status: {props.data.teamStatus}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardSummary;
