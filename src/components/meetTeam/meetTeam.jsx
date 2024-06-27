import React from 'react';
import './meetTeam.scss';
import { SelfImage1, SelfImage2, SelfImage3, SelfImage4 } from '../../assets';

// Team data
const teamData = [
  { id: 1, picture: SelfImage1, name: 'Liam Smith', role: 'Lead Photographer' },
  { id: 2, picture: SelfImage2, name: 'Oliver Johnson', role: 'Creative Director' },
  { id: 3, picture: SelfImage3, name: 'Emma Walker', role: 'Studio Manager' },
  { id: 4, picture: SelfImage4, name: 'Noah Davis', role: 'Digital Artist' },
];

const MeetTeam = () => {
  return (
    <div className='section-content-center'>
      {/* Section title */}
      <div className='section-title-grouping'>
        <h2 className='section-title'>Meet Our Team</h2>
        <h3 className='section-subtitle'>The Faces Behind the Lens</h3>
      </div>
      {/* Team members grid */}
      <div className='grid-container'>
        {teamData.map(member => (
          <div key={member.id} className='grid-d-3'>
            <div className='team-member'>
              {/* Team member image */}
              <div className='team-image-container'>
                <img
                  className='team-image'
                  alt={member.name}
                  src={member.picture}
                  loading="lazy"
                />
              </div>
              <h2 className='member-name'>{member.name}</h2>
              <h3 className='member-role'>{member.role}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
