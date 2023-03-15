import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, secondColor, btnColor1 } = Colors

export const SkillsSection = styled.div`
    background-color: ${secondColor}
`;

export const Div = styled.div`
    transition: all .3s linear;
    background-color: ${btnColor1};

    &:hover > img{
        animation: pulse .4s ease;
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
    color: ${mainColor}
`;
