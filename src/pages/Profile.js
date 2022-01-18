import React from 'react'

const Profile = () => {
    const user = {
        name:'Anamul Hasan Nadim',
        designation: 'Full Stack',
        dob: '08-16-1994',
        joinDate: '01-01-2022',
        team: 'Web',
        nid: '12334567',
        phone: '01677464122',
        bloodGroup: 'B+',
        supervisor: 'Bilash'
    }
    return (
        <main>
            <div className="container">
                <h1>Profile of Nadim</h1>
                <div className="leaveInfo">
                    <div className="leaveInfo-item">
                        <h3>Name:</h3>
                        <p>{user.name}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Designation:</h3>
                        <p>{user.designation}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>DOB:</h3>
                        <p>{user.dob}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Join Date:</h3>
                        <p>{user.joinDate}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>NID:</h3>
                        <p>{user.nid}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Phone:</h3>
                        <p>{user.phone}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Blood Group:</h3>
                        <p>{user.bloodGroup}</p>
                    </div>
                    <div className="leaveInfo-item">
                        <h3>Supervisor:</h3>
                        <p>{user.supervisor}</p>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Profile
