import styled from 'styled-components'

const mainColor = '#2B2C2F';
const secondColor = '#FB839E';

export const RouterParent = styled.div`

    nav{
        left: -100%;
        top: 0;
        bottom: 0;
        background-color: ${mainColor};
        width: 250px; 
        position: absolute;
        z-index: 999;
        transition: all .4s ease;

        &.open{
            left: 0 !important;
        }
    
        ul{
            height: 100%
        }
    
        a{
            display: block;
            padding: 14px 12px;
            color: #FFF;
            transition: all .3s linear;
    
            &:hover{
                background-color: #111
            }
        }
    }

    button{
        z-index: 998;
        right: 15px;
        top: 15px;
        background: ${mainColor};
        border-radius: 100%;
        width: 50px;
        height: 50px;

    }

    .overlay{

    }
`

export const Overlay = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,.5);
    top: 0; 
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 900;
`;
