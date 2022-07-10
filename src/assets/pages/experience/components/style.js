import styled from 'styled-components'
import Colors from '../../../aids/Colors'

const { mainColor, navColor } = Colors


export const Div = styled.div`
    background-color: ${navColor}
`;

export const Icon = styled.i`
color: ${mainColor}
`;


export const Button = styled.button`
color: #FFF;
background-color: ${mainColor}
`;
