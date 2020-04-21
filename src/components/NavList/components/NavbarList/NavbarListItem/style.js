import styled from 'styled-components';

export default styled.div`
    a.link-button, div.drop-down-item {
        font-size: .9em;
        padding: ${p => p.theme.padding.main};
        display: flex;
        align-items: center;
        color: ${prop => prop.theme.color.main};
        background: ${props => props.active === 'active' ? props.theme.background.main : 'transparent' };       
        height: 60px;
        cursor: pointer;

        > i { color: ${p => p.theme.color.main} }

        > span { padding: 0 ${p => p.theme.padding.main}; }

        &:hover { background: ${p => p.theme.background.mainHover}; }
    }

    a.link-button {
        text-decoration: none;
    }
`;

export const DropDownList = styled.div`
    background-color: #212121;
    overflow: hidden;
    max-height: ${p => p.open ? '300px' : '0px'};
    transition: all .3s linear;
`;


