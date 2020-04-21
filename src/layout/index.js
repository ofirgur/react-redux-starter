import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsertData } from 'user/actions';
import { LayoutContext } from './context';
import NavCover from './components/NavCover';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header';
import { FETCH_USER_DATA } from 'user/actions/types';
import { isFetching } from 'http-redux/selectors';
import LayoutContainer, { MainSpinner } from './style';
import user from 'user';

const Layout = () => {
    const navbar = useState(false), // [open, setOpen] = navbar
          direction = useState(user.direction),
          dispatch = useDispatch(),
          _isFetching = useSelector(isFetching(FETCH_USER_DATA));

    useEffect(() => { 
        document.title = `Krembo`;
        dispatch(fetchUsertData()); 
    }, []);

    if(_isFetching) return <MainSpinner><span>Loading...</span></MainSpinner>;

    return (
        <LayoutContext.Provider value={{ navbar, direction }}>
            <LayoutContainer className="layout" direction={direction[0]}>
                {/* comunicates throgh LayoutContext */}
                <NavCover />
                <Header />
                <Navbar />
                <Main />
            </LayoutContainer>
        </LayoutContext.Provider>
    );
};

export default Layout;