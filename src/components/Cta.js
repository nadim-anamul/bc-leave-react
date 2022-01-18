import React from 'react';
import { Link } from 'react-router-dom'

const Cta = (props) => {
    return (
        <div className="cta mt-30">
            <h2>{props.title}</h2>
            <div>
                <Link to={props.action} className="btn btn-primary">{props.actionName}</Link>
            </div>
        </div>
    )
}

export default Cta
