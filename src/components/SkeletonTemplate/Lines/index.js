import React from 'react';
import PropTypes from 'prop-types';

import SkeletonLoading from 'components/SkeletonLoading';
import SkeletonTemplateContainer from './style';

const Lines = ({ n }) => {
    const _n = n || 3,
    sep = <div className="sep">-</div>;

    const Line = () => (
        <SkeletonTemplateContainer className="skeleton-template__line">
            <div>
                <SkeletonLoading circle width="60px" height="60px" />
                {sep}
                <SkeletonLoading width="100%" />
            </div>
            {sep}
            <SkeletonLoading />
            {sep}
            <SkeletonLoading />
        </SkeletonTemplateContainer>
    );

    const getLines = () => {
        const lines = [];

        for(let i = 0; i < _n; i++) {
            lines.push(<Line key={i} />);
        }

        return lines;
    };

    return (
        <div className="skeleton-template__lines">
            {getLines()}
        </div>
    );
};

Lines.propTypes = {
    n: PropTypes.number
};

export default Lines;