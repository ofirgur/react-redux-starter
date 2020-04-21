import React from 'react';
import PropTypes from 'prop-types';

import NavbarList from './components/NavbarList';
import { NavListContext } from './context';

const NavList = ({ type, items, isActive, onClick }) => {
    const getNavList = () => {
        switch(type) {
            case 'navbar':
                return <NavbarList items={items} />;
        }
    };

    return(
        <NavListContext.Provider value={{ isActive, onClick }}>
            {getNavList()}
        </NavListContext.Provider>
    );
};

NavList.propTypes = {
    type: PropTypes.string,
    items: PropTypes.array,
    isActive: PropTypes.func,
    onClick: PropTypes.func, 
};

export default NavList;