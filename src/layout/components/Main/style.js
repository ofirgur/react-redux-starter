import styled from 'styled-components';

export default styled.main`
    z-index: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: ${prop => prop.theme.background.main};
    grid-column: span 2;
    @media only screen and (min-width: ${props => props.theme.breakpoint.md}) {
        grid-column: span 1;
    }

    .modules-container {
        padding: ${prop => prop.theme.padding.main} ${prop => prop.theme.padding.mobile};
        @media only screen and (min-width: ${props => props.theme.breakpoint.sm}) {
            padding: ${prop => prop.theme.padding.main};
        }

        flex-grow: 1;
        flex-shrink: 1;
        overflow: auto;
        padding-top: 0;
    }
`;
