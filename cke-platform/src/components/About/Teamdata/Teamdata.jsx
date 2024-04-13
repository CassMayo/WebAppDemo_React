import React from 'react';
import Teamcard from '../Teamcard/Teamcard';
import './Teamdata.css';
import teamMembers from './TeamMembers.json';

const LeadershipTeam = () => {
  return (
    <section className="leadershipTeam">
      <h2>Our leadership team</h2>
      <div className="teamMembers">
        {teamMembers.map(member => (
          <Teamcard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
