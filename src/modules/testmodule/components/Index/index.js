import React from 'react';
import { useNamespaceTranslation } from 'i18n/helpers';

import { namespace } from '../../config';

import Styled from './styled';

const Index = () => {
    const { t } = useNamespaceTranslation(namespace);
    
    return (
        <Styled>
            <div>{t('HelloWorld.Text')}</div>
        </Styled>
    );
};

export default Index;