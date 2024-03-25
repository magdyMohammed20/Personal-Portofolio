import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, navColor,experienceColor, overlayColor, whiteColor } = Colors

export const PortofolioSection = styled.div`
    background-color: ${navColor}
`;

export const Div = styled.div`
    background-color: ${experienceColor};
    border-radius: 10px;
    img{
        filter: grayscale(35%);
    }

    a{
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%) scale(0);
        color: ${whiteColor};
        background-color: ${mainColor};
        z-index: 11;
        transition: all .2s linear;
    }
    
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${overlayColor};
        z-index: 10;
        transition: all .4s linear;
        opacity: 0
    }

    &:hover::after{
        opacity: 1
    }

    &:hover > a{
        transform: translate(-50% , -50%) scale(1);
    }
`;

