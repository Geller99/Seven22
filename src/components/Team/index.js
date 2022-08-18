import React from 'react'
import TeamCard from './TeamCard';
import TeamEffects from './TeamEffects';

const Team = () => {
    return (
        <div className="team-section">
            <div className="team-heading">
                <div className='heading-name'>The team</div>
                <div className="dotted-line"><img src="/assets/svg/faq-doted-line.svg" alt="" /></div>
            </div>
            <div className="team-wrapper-body">
                <div className="solid-header-bottom-line"></div>
                <TeamCard />
            </div>

            <TeamEffects />
            <CircleBox />

            
        </div>
    )
}

export default Team;


function CircleBox() {
    return (
        <div className="circle-box">
            <img src="/assets/svg/TheIcons/semi-circle.svg" alt="" />
            <img src="/assets/svg/TheIcons/circle.svg" alt="" />

        </div>
    )
}