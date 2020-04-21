import React, { useContext }  from 'react';

export const NavListContext = React.createContext();
export const useNavListContext = () => useContext(NavListContext);