import React from 'react';
import Cta from '../components/Cta';
import CardSummary from '../components/CardSummary';

const TeamManagement = () => {
    const teamData = [
        {
            id: 1,
            name: 'Web',
            teamLead: 'Bilash',
            teamStatus: 'Active',
        },
        {
            id: 2,
            name: 'iOS',
            teamLead: 'Musfique',
            teamStatus: 'Active',
        },
        {
            id: 3,
            name: 'Android',
            teamLead: 'Kajim',
            teamStatus: 'Active',
        },
    ];
    const totalTeam = teamData.length;

    return (
        <main>
            <div className="container">
                <h1>Employee Management</h1>
                <div className="infoSummary">
                    <div className="gridRow">
                        {teamData.map((team) => (
                            <CardSummary
                                key={team.id}
                                data={team}
                                editLink={`/teamEdit/${team.id}`}
                            ></CardSummary>
                        ))}
                    </div>
                </div>
                <Cta
                    title={`Total ${totalTeam} Active Team`}
                    action="/addTeam"
                    actionName="Add Team"
                ></Cta>
            </div>
        </main>
    );
};

export default TeamManagement;
