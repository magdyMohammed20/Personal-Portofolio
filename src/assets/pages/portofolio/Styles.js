import styled from 'styled-components'

const mainColor = '#111827';
const mainColor2 = '#cdb78e';

export const PortofolioSection = styled.div`
    height: 100vh;
    background-color: ${mainColor}
`;

export const Div = styled.div`

    img{
        filter: grayscale(35%);
    }

    a{
        top: 50%;
        left: 50%;
        transform: translate(-50%) scale(0);
        background-color: ${mainColor2};
        z-index: 11;
        transition: all .2s linear;
    }
    
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #1f2937d6;
        z-index: 10;
        transition: all .4s linear;
        opacity: 0
    }

    &:hover::after{
        opacity: 1
    }

    &:hover > a{
        transform: translate(-50%) scale(1);
    }
`;

