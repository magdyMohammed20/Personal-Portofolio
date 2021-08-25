import styled from 'styled-components'
import homeBack from '../../images/Home/home.jpg'

const mainColor = '#111827';
const secondColor = '#FB839E';

export const HomeSection = styled.div`
    background-image: url(${homeBack});
    z-index: 2;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #1f2937b8;
        z-index: -1
    }
`;

export const AboutBtn = styled.button`
    background-color: ${mainColor};
    color: ${secondColor};
    transition: all .4s linear;

    &:hover{    
        background-color: #cdb78e;
        color: #2b1266
    }
`;

export const Img = styled.img`
    width: 500px;
    height: 500px;
    -webkit-filter: invert(16%) sepia(80%);
    filter: invert(16%) sepia(80%);
    z-index: -1;
}
`;