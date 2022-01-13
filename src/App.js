import Nav from './components/Nav';
import AdminSummary from './components/AdminSummary';
import PendingLeave from './components/PendingLeave';
import TodaysLeave from './components/TodaysLeave';

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

            <div className="container">
                <AdminSummary applicationData={applicationData}></AdminSummary>
                <PendingLeave applicationData={applicationData}></PendingLeave>
                <TodaysLeave applicationData={applicationData}></TodaysLeave>
            </div>
        </>
    );
}

export default App;
