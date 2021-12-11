import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, secondColor, navColor } = Colors



export const ContactSection = styled.div`
    background-color: ${secondColor}
`;

export const Span = styled.span`
    color: ${mainColor}
`;

export const Div = styled.div`
    background-color: ${navColor}
`;

export const Icon = styled.i`
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