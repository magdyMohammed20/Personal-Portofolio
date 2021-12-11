import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, secondColor, btnColor1, whiteColor } = Colors

export const AboutSection = styled.div`
    height: 100vh;
    background-color: ${secondColor}
`;

export const Span = styled.span`
    color: ${mainColor}
`;

export const Anchor = styled.a`
    transition: all .3s linear;

   &:hover{
       background-color: ${mainColor};
   }

   i{
    transition: all .3s linear;
   }
   &:hover > i{
       transform: rotate(360deg);
   }
`;

export const Btn = styled.a`
    background-color: ${btnColor1};
    color: ${whiteColor};
    transition: all .4s linear;

    &:hover{    
        background-color: ${mainColor};
    }
`;