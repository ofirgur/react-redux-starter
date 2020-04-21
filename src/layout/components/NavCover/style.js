import styled from 'styled-components';

export default styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #CFD8DC;
    opacity: ${props => props.open ? .3 : 0};
    display: ${props => props.open ? 'block' : 'none'};
    transition: all .3s linear;
`;