import Nav from './components/Nav';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import EmployeeManagement from './pages/EmployeeManagement';
import TeamManagement from './pages/TeamManagement';

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
            leaveStatus: 'Accepted',
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
        <>
            <Nav></Nav>
 
            <Routes>
                <Route path="/" element={<Home applicationData = {applicationData}/>} />
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/employee-management" element={<EmployeeManagement />} />
                <Route path="/team-management" element={<TeamManagement />} />
            </Routes>
        </>
    );
}

export default App;
