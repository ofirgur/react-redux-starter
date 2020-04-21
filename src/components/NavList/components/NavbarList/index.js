import React from 'react';
import PropTypes from 'prop-types';

import NavbarListContainer from './style';
import NavbarLilstItem from './NavbarListItem';

const NavbarList = ({ items }) => {
    return (
        <NavbarListContainer className="nav-navbar-list">
            {
                items.map(item => <NavbarLilstItem key={item.name} item={item} />)
            }
        </NavbarListContainer>
    );
};

NavbarList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        pathname: PropTypes.string,
        icon: PropTypes.staring,
        title: PropTypes.string
    }))
};

export default NavbarList;