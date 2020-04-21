import styled, { css, keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
    0% {
        background-position: -490px 0;
    }
    100% {
        background-position: 490px 0;
    }
`;

export default styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || '14px'};
    animation: ${SkeletonAnimation} 1s linear infinite forwards;
    animation-name: ${SkeletonAnimation};
    background: #e4e7ed;
    border-radius: 4px;
    background-image: -webkit-linear-gradient(
        left,
        #e4e7ed 0%,
        #c3cad9 20%,
        #e4e7ed 40%,
        #e4e7ed 100%
    );
    background-size: 980px 898px;
    position: relative;

    ${props =>
        props.circle &&
        css`
            border-radius: 100%;
        `};
`;
