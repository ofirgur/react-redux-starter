import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    ${styledNormalize};
    
    body {
        background: ${props => props.theme.background.body};
        font-family: ${props => props.theme.typography.fontFamity};
        color: ${props => props.theme.color.main};
        word-break: break-word; 
        font-size: ${props => props.theme.typography.mobileFontSize};

        @media only screen and (min-width: ${props => props.theme.breakpoint.sm}) {
            font-size: ${props => props.theme.typography.fontSize}; 
        }

        i {
            &:hover {
                cursor: pointer;
                transform: scale(1.5);
                opacity: .8; 
            }
        }

        a.simple-link {
            color: ${props => props.theme.color.link};
            text-decoration: none;

            &:hover { 
                color: ${props => props.theme.color.hoveredLink};
                text-decoration: underline;
            }
        }
    }
`;