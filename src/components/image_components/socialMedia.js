import React from 'react';
import {
    SocialMediaContainer,
    SocialMediaList,
    SocialMediaLink
} from '../../styles/components/socialMediaImage.style';
import {socialMedia} from '../../config';
import SocialMediaImage from './socialMediaImage';

const SocialMedia = () => (
    <SocialMediaContainer>
        <SocialMediaList>
            {
                socialMedia.map(({url, name}, i) => (
                    <SocialMediaLink to={url}>
                        <SocialMediaImage name={name} />
                    </SocialMediaLink>
                ))
            }
        </SocialMediaList>
    </SocialMediaContainer>
);

export default SocialMedia;