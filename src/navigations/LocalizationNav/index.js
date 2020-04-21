import React from 'react';
// the hook
import { useTranslation } from 'react-i18next';
import { useLayoutContext } from 'layout/context';

const Localization = () => {
    const { i18n } = useTranslation();
    const { direction } = useLayoutContext();

    return (
        <div className="localization-nav">
            {/* <button onClick={() => i18n.changeLanguage('he')}>עברית</button> */}
            <button onClick={() => {
                i18n.changeLanguage('he');
                direction[1]('rtl');
            }}>עברית</button>
            <span>&nbsp;</span>
            <button onClick={() => {
                i18n.changeLanguage('en');
                direction[1]('ltr');
            }}>English</button>
        </div>
    );
};

export default Localization;