import styled from 'styled-components';

export default styled.footer`
    padding: ${prop => prop.theme.padding.main};
    background: ${prop => prop.theme.background.main};
    grid-column: span 2;
    display: flex;
    justify-content: center;
`;
