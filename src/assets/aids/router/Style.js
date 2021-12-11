import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, whityBorder, overlayColor, navColor, navColorHover, whiteColor } = Colors

export const RouterParent = styled.div`

    nav{
        left: -100%;
        top: 0;
        bottom: 0;
        background-color: ${navColor};
        width: 250px; 
        border-right: 1px solid ${whityBorder};
        position: fixed;
        z-index: 999;
        transition: all .2s ease;

        &.open{
            left: 0 !important;
        }
    
        ul{
            height: 100%;
        }
    
        a{
            display: block;
            padding: 20px 15px;
            color: ${whiteColor};
            transition: all .2s linear;            

            &:hover{
                color: ${mainColor};
                background-color: ${navColorHover}
            }
        }
    }

    .humb{
        z-index: 998;
        right: 15px;
        top: 15px;
        background-color: ${mainColor};
        border-radius: 5px;
        width: 50px;
        height: 50px;
    }
`

export const Overlay = styled.div`
    position: fixed;
    background-color: ${overlayColor};
    top: 0; 
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 900;
`;
