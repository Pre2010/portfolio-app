import React from 'react';
import GitHubIcon from '../../images/social_media_icons/github';
import LinkedInIcon from '../../images/social_media_icons/linkedIn';

const SocialMediaImage = ({name}) => {
    switch (name) {
        case 'github':
            return <GitHubIcon />
            
        case 'linkedIn':
            return <LinkedInIcon />

        default:
            break;
    }
};

export default SocialMediaImage;