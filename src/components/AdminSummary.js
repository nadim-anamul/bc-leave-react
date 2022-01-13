import React from 'react';

const AdminSummary = () => {
    return (
        <main>
            <h1>Leave Management System | Brain Craft LTD.</h1>
            <div className="infoSummary">
                <div className="gridRow">
                    <div className="card dash-widget shadow-sm">
                        <div className="card-body">
                            <div className="card-icon bg-primary">
                                <i
                                    className="fas fa-users"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">Employees</h4>
                                <p className="card-text">50</p>
                            </div>
                        </div>
                    </div>
                    <div className="card dash-widget shadow-sm">
                        <div className="card-body">
                            <div className="card-icon bg-primary">
                                <i
                                    className="fas fa-user-friends"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">
                                    Leave Application
                                </h4>
                                <p className="card-text">10</p>
                            </div>
                        </div>
                    </div>
                    <div className="card dash-widget shadow-sm">
                        <div className="card-body">
                            <div className="card-icon bg-primary">
                                <i
                                    className="fas fa-calendar-alt"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">On Leave</h4>
                                <p className="card-text">5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminSummary;
