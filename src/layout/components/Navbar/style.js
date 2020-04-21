import styled from 'styled-components';

export default styled.div`
    z-index: 5;
    /* box-shadow: 3px 7px 7px rgba(0,0,0,0.3); */
    background: ${props => props.theme.background.body};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 50px;
    height: calc(100vh - 50px);
    width: 200px;
    transform: ${props => props.open ? 'translate(0%)' : 'translate(-100%)'};
    transition: transform 0.3s ease-in-out;

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}) {
        position: static;
        top: auto;
        height: auto;
        width: auto;
        transform: translate(0%);
        transition: none;
    }
    
    .navbar-end {
        padding: ${prop => prop.theme.padding.main};
    }
`;