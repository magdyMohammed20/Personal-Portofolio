import styled from 'styled-components'

const mainColor = '#111827';
const mainColor2 = '#050b19';
const secondColor = '#cdb78e';

export const SkillsSection = styled.div`
    background-color: ${mainColor}
`;

export const Div = styled.div`
    transition: all .3s linear;
    &:hover{
        background-color: ${mainColor2}
    }

    &:hover > img{
        animation: pulse .6s ease;
    }

    @keyframes pulse{
        0%{
            transform: scale(1)
        }
        30%{
            transform: scale(1.3)
        }
        60%{
            transform: scale(1)
        }
        80%{
            transform: scale(1.3)
        }
        100%{
            transform: scale(1)
        }
    }
`;

export const H1 = styled.h1`
    color: ${secondColor}
`;
