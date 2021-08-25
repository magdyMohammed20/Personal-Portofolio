import styled from 'styled-components'

const mainColor = '#111827';
const mainColor2 = '#050b19';
const secondColor = '#FB839E';


export const AboutSection = styled.div`
    height: 100vh;
    background-color: ${mainColor}
`;

export const Span = styled.span`
    color: #FB839E
`;

/*export const Img = styled.img`
width: 400px;
    height: 400px;
    -webkit-filter: invert(16%) sepia(80%);
    filter: invert(16%) sepia(80%);
`;
*/

export const Anchor = styled.a`
    transition: all .3s linear;

   &:hover{
       background-color: ${secondColor};
   }

   i{
    transition: all .3s linear;
   }
   &:hover > i{
       color: ${mainColor} !important;
       transform: rotate(360deg);
   }
`;

export const Btn = styled.button`
    background-color: ${mainColor2};
    color: ${secondColor};
    transition: all .4s linear;

    &:hover{    
        background-color: #cdb78e;
        color: #2b1266
    }
`;