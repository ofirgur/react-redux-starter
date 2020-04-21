import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useNavListContext } from '../../../context';
import NavbarListItemContainer, { DropDownList } from './style';

const NavbarListItem = ({ item }) => {
    const [open, setOpen] = useState(false);
    const { isActive, onClick } = useNavListContext();
    const { pathname, icon, title, childRoutes } = item;

    const handleActive = () => isActive(pathname) ? 'active' : '';

    const getItemHtml = () => {
        const arrow = open ? 'keyboard_arrow_up' : 'keyboard_arrow_down';

        if(childRoutes) {
            return (
                <>
                    <div className="drop-down-item" onClick={() => setOpen(!open)} >
                        <i className="material-icons">{icon}</i>
                        <span>{title}</span>
                        <i className="material-icons">{arrow}</i>
                    </div>
                    <DropDownList className="drop-down-list" open={open}>
                        {childRoutes.map((childRoute, index) => <NavbarListItem key={index} item={{ ...childRoute, childRoutes: undefined }} isActive={isActive} />)}
                    </DropDownList>
                </>
            );
        }
        
        return (
            <Link className="link-button" to={pathname} onClick={onClick}>
                <i className="material-icons">{icon}</i>
                <span>{title}</span>
            </Link>
        );
    };

    return (
        <NavbarListItemContainer
            className="navbar-list-item"   
            active={!childRoutes && handleActive()}
        >
            {getItemHtml()}
        </NavbarListItemContainer>
    );
};

NavbarListItem.propTypes = {
    item: PropTypes.shape({
        pathname: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        childRoutes: PropTypes.array,
    })
};

export default NavbarListItem;