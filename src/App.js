import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EmployeeManagement from './pages/EmployeeManagement';
import TeamManagement from './pages/TeamManagement';
import TeamEdit from './pages/TeamEdit';
import LeaveManagement from './pages/LeaveManagement';
import LeaveReview from './pages/LeaveReview';
import Profile from './pages/Profile';
import LeaveApplication from './pages/LeaveApplication';
import Login from './pages/Login';
import Success from './RedirectPage/success';
import Failure from './RedirectPage/failure';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    const applicationData = [
        {
            id: 1,
            name: 'Nadim',
            team: 'Web',
            leaveType: 'Casual',
            leaveDate: '2020-04-01',
            leaveDays: '2',
            leaveStatus: 'Approved',
        },
        {
            id: 2,
            name: 'Ovi',
            team: 'iOS',
            leaveType: 'Sick',
            leaveDate: '2020-04-02',
            leaveDays: '3',
            leaveStatus: 'Pending',
        },
        {
            id: 3,
            name: 'Rajib',
            team: 'Web',
            leaveType: 'Casual',
            leaveDate: '2020-04-01',
            leaveDays: '1',
            leaveStatus: 'Approved',
        },
        {
            id: 4,
            name: 'Kajim',
            team: 'Android',
            leaveType: 'Casual',
            leaveDate: '2020-04-03',
            leaveDays: '2',
            leaveStatus: 'Pending',
        },
        {
            id: 5,
            name: 'Bilash',
            team: 'Web',
            leaveType: 'Casual',
            leaveDate: '2020-04-01',
            leaveDays: '4',
            leaveStatus: 'Pending',
        },
        {
            id: 6,
            name: 'Musfique',
            team: 'Web',
            leaveType: 'Casual',
            leaveDate: '2020-04-05',
            leaveDays: '2',
            leaveStatus: 'Rejected',
        },
    ];
    return (
        <AuthProvider>
            <Nav/>

            <Routes>
            <Route path="/" element={<Login />} />

            
                <Route
                    path="/dashboard"
                    element={<Home applicationData={applicationData} />}
                />


                   <Route path="/success/:token" element={<Success />} />
                    <Route path="/failure" element={<Failure />} />

                {/* <Route path="/addUser" element={<AddUser />} />
                <Route
                    path="/employee-management"
                    element={<EmployeeManagement />}
                />
                <Route path="/team-management" element={<TeamManagement />} />
                <Route path="/team-edit" element={<TeamEdit />} />
                <Route
                    path="/leave-management"
                    element={
                        <LeaveManagement applicationData={applicationData} />
                    }
                />
                <Route path="/leave-review" element={<LeaveReview />}>
                    <Route path=":slug" element={<LeaveReview />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
                <Route path="/leave-application" element={<LeaveApplication />} /> */}
                
            </Routes>
            </AuthProvider>
    );
}

export default App;
