import React from 'react';

import ModulesTitle from './components/ModulesTitle';
import ModulesContainer from './components/ModulesContainer';
import Footer from './components/Footer';
import MainContainer from './style';

export default () => {
    return (
        <MainContainer className="main">
            <ModulesTitle />
            <ModulesContainer />
            <Footer />
        </MainContainer>
    );
};


