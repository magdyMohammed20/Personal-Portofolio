import styled from 'styled-components'

const mainColor = '#111827';
const secondColor = '#cdb78e';

export const RouterParent = styled.div`

    nav{
        left: -100%;
        top: 0;
        bottom: 0;
        background-color: ${mainColor};
        width: 250px; 
        border-right: 3px solid ${secondColor};
        position: absolute;
        z-index: 999;
        transition: all .4s ease;

        &.open{
            left: 0 !important;
        }
    
        ul{
            height: 100%;
        }
    
        a{
            display: block;
            padding: 14px 12px;
            color: #FFF;
            position: relative;
            z-index: 2;
            transition: all .2s linear;
            &::after{
                content: '';
                position: absolute;
                left: -100%;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: ${secondColor};
                z-index: -1;
                transition: all .2s linear;
            }
            
            &:hover::after{
                left: 0
            }

            &:hover{
                color: ${mainColor};
                padding-left: 20px !important;
            }
        }
    }

    .humb{
        z-index: 998;
        right: 15px;
        top: 15px;
        background-color: ${secondColor};
        border-radius: 100%;
        width: 50px;
        height: 50px;
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
