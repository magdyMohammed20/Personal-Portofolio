import styled from 'styled-components'
import home from '../../images/Home/home.jpg'
import { Link } from 'react-router-dom'
import Colors from '../../aids/Colors'

const { mainColor, whiteColor, overlayColor, blackColor } = Colors
export const HomeSection = styled.div`
    
    z-index: 2;
    background-image: url(${home});
    
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${overlayColor};
        z-index: -1
    }
`;

export const AboutBtn = styled(Link)`
    background-color: ${mainColor};
    color: ${whiteColor};
    transition: all .4s linear;

    &:hover{    
        background-color: ${whiteColor};
        color: ${blackColor}
    }
`;

