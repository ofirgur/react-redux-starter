import React from 'react';
import PropTypes from 'prop-types';

import SkeletonLoadingContainer from './style';

const SkeletonLoading = ({ width, height, circle }) => {
    return (
        <SkeletonLoadingContainer className="skeleton-loading" 
            width={width}
            height={height}
            circle={circle}
        />
    );
};

SkeletonLoading.propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
        circle: PropTypes.bool
};

export default SkeletonLoading;
