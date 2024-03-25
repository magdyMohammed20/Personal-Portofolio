import styled from 'styled-components'
import Colors from '../../../aids/Colors'

const { mainColor , experienceColor } = Colors


export const Div = styled.div`
    background-color: ${experienceColor}
`;

export const DivNum = styled.div`
    background-color: ${mainColor}
`;

export const Icon = styled.i`
color: ${mainColor}
`;


export const Button = styled.button`
color: #FFF;
background-color: ${mainColor}
`;
