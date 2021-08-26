import styled from 'styled-components'

const mainColor = '#111827';
const mainColor2 = '#050b19';
const secondColor = '#cdb78e';

export const SkillsSection = styled.div`
    height: 100vh;
    background-color: ${mainColor}
`;

export const Div = styled.div`
    transition: all .3s linear;
    &:hover{
        background-color: ${mainColor2}
    }
`;

export const H1 = styled.h1`
    color: ${secondColor}
`;
