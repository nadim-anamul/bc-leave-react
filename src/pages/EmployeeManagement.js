import React from 'react';
import Cta from '../components/Cta';
import Card from '../components/Card';

const EmployeeManagement = () => {
    const empData = [
        {
            id: 1,
            name: 'Nadim',
            team: 'Web',
            supervisor: 'Rajib',
            contactNumber: '0178787878',
            email: 'nadim@braincraftapps.com',
            designation: 'Web Developer',
        },
        {
            id: 2,
            name: 'Ovi',
            team: 'iOS',
            supervisor: 'Rajib',
            contactNumber: '0178787878',
            email: 'ovi@braincraftsapps.com',
            designation: 'iOS Developer',
        },
        {
            id: 3,
            name: 'Rajib',
            team: 'Web',
            supervisor: 'Rajib',
            contactNumber: '0178787878',
            email: 'rajib@braincraftapps.com',
            designation: 'Web Developer',
        },
        {
            id: 4,
            name: 'Kajim',
            team: 'Android',
            supervisor: 'Rajib',
            contactNumber: '0178787878',
            email: 'kajim@braincraftapps.com',
            designation: 'Android Developer',
        },
    ];
    const totalEmp = empData.length;
    return (
        <main>
            <div className="container">
                <h1>Employee Management</h1>
                <Cta
                    title={`Total ${totalEmp} Active Employee`}
                    action="/addUser"
                    actionName="Add User"
                ></Cta>
                <div className="gridRow employeeList">
                    {empData.map((emp) => (
                        <Card key={emp.id} application={emp}></Card>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default EmployeeManagement;
