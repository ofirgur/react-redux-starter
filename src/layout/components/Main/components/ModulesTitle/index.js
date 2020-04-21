import React from 'react';
import { useSelector } from 'react-redux';
import { useNamespaceTranslation } from 'i18n/helpers';

import { getCurrentIcon, getCurrentTitle } from 'siteMap/selectors';
import ModulesTitleContainer from './style';
import config from 'config';

const layoutNamespace = config.namespaces.layout;

const ModulesTitle = () => {
    const { t } = useNamespaceTranslation(layoutNamespace);
    const currentTitle = useSelector(getCurrentTitle),
          currentIcon = useSelector(getCurrentIcon);  

    return (
        <ModulesTitleContainer className="modules-title" style={{ color: '#fff' }}>
            <i className="material-icons">{currentIcon}</i>
            <span>{t(currentTitle)}</span>
        </ModulesTitleContainer>
    );
};

export default ModulesTitle;