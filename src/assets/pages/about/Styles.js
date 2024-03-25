import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, navColor, btnColor1, whiteColor } = Colors

export const AboutSection = styled.div`
    height: 100vh;
    background-color: ${navColor}
`;

export const Btn = styled.a`
    background-color: ${btnColor1};
    color: ${whiteColor};
    transition: all .4s linear;

    &:hover{    
        background-color: ${mainColor};
    }
`;