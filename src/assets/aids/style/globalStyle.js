import styled from 'styled-components'
import Colors from '../Colors'


const { mainColor } = Colors


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