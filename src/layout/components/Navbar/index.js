import React from 'react';

import { useActiveSelector } from 'siteMap/hooks';
import { useLayoutContext } from '../../context';
import NavbarContainer from './style';
import navItems from './navItems';
import NavList from 'components/NavList';
import { useNamespaceTranslation } from 'i18n/helpers';
import config from 'config';

const layoutNamespace = config.namespaces.layout;

const Navbar = () => {
    const { navbar } = useLayoutContext(), 
            [open, setOpen] = navbar;
    const { t } = useNamespaceTranslation(layoutNamespace);
    const mapToTranlation = item => ({ 
        ...item, 
        title: t(item.title),
        childRoutes: item.childRoutes && item.childRoutes.map(mapToTranlation)
    });

    return (
        <NavbarContainer className="navbar" open={open}>
            <div className="navbar-start">
                <NavList 
                    type="navbar" 
                    items={navItems.map(mapToTranlation)} 
                    isActive={useActiveSelector} 
                    onClick={() => setOpen(false)} 
                />
            </div>
            <div className="navbar-end">
                <div>NAVBAR END</div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;




