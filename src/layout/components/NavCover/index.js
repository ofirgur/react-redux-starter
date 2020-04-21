import React from 'react';

import { useLayoutContext } from '../../context';

import NavCoverContainer from './style';

const NavCover = () => {
    const { navbar } = useLayoutContext();
    const [open, setOpen] = navbar;


    return (
        <NavCoverContainer className="nav-cover" open={open} onClick={() => setOpen(false)} />
    );
};

export default NavCover;