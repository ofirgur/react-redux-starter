import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

import store, { history } from 'store';
import { GlobalStyle, theme } from 'styled';
import AppLayout from 'layout';

export default () => { 
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ConnectedRouter history={history}>         
                    <GlobalStyle />
                    <AppLayout />           
                </ConnectedRouter>
            </ThemeProvider>
        </Provider>
    );
}; 


