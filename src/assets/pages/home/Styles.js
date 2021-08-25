import styled from 'styled-components'
import homeBack from '../../images/Home/home.jpg'

const mainColor = '#111827';
const secondColor = '#FB839E';

export const HomeSection = styled.div`
    background-image: url(${homeBack});
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
    -webkit-filter: saturate(512%) invert(32%) sepia(124%);
    filter: saturate(512%) invert(32%) sepia(124%);
}
`;