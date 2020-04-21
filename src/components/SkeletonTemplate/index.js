import React from 'react';
import PropTypes from 'prop-types';

import Lines from './Lines';

const SkeletonTemplate = ({ type }) => {

    const getType = () => {
        switch(type) {
            case 'lines': return <Lines />;
            default: return <Lines />;
        }
    };

    return (
        <div className="skeleton-template">
            {getType()}
        </div>
    );
};

SkeletonTemplate.propTypes = {
    type: PropTypes.string
};

export default SkeletonTemplate;