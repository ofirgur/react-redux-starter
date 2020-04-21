import React from 'react';

import { useLayoutContext } from '../../context';
import HeaderContainer from './style';

const Header = () => {
    const { navbar } = useLayoutContext();
    const setOpen = navbar[1];

    return (
        <HeaderContainer className="header">
            <div className="header-start">     
                <i className="icon icon-navbar-open material-icons" onClick={() => setOpen(true)}>{'face'}</i>
                <div>HEADER START</div>
                <div>HEADER CONTENT</div>
            </div>
            <div className="header-end">           
                <div>HEADER END</div>     
                <i className=" icon material-icons">account_circle</i>   
            </div>
            
        </HeaderContainer>
    );
};

export default Header;




