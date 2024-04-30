import React from 'react';
import './Teamcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const Teamcard = ({ name, title, description, imageSrc, linkedin, instagram }) => {
    return (
        <section className="leadershipTeam">
          <h2>Our leadership team</h2>
          <div className="teamMembers">
            {teamMembers.map(member => (
              <Teamcard key={member.id} {...member} />
            ))}
          </div>
    
          <h2>Our Interns</h2>
          <div className="InternTeam">
            {InternsData.map(member => (
              <Teamcard key={member.id} {...member} />
            ))}
    
          </div>
        </section>
      );
    };
    
};

export default Teamcard;
