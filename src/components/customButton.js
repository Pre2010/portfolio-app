import React from 'react';
import {CustomButtonStyled} from '../styles/components/customButton.style';

const CustomButton = ({children, ...customProps}) => {
    return (
        <CustomButtonStyled {...customProps}>
            {children}
        </CustomButtonStyled>
    );
};

export default CustomButton;