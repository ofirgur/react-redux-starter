import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

// dynamically change language
export const getLanguage = () => i18n.language;

export const changeLanguage = lang => i18n.changeLanguage(lang);

// load additional resource to existing namespace after initialization
export const loadResource = ({ lang, namespace, key, value }) => {
    i18n.addResource(lang, namespace, key, value);
};

// load additional resources to existing namespace after initialization
export const loadResources = ({ lang, namespace, resources }) => {
    i18n.addResources(lang, namespace, resources);
};

// load additional namespaces after initialization
export const loadNamespace = ({ namespace, lang, resources }) => {
    i18n.loadNamespaces(namespace, () => { 
        i18n.addResources(lang, namespace, resources);
    });
};

export const loadNamespaces = namespaces => {
    for(const n in namespaces) {
        if (namespaces.hasOwnProperty(n)) {
            const namespace = namespaces[n], 
                { resources } = namespace;

            for(const lang in resources) {
                if (resources.hasOwnProperty(lang)) {
                    i18n.loadNamespaces(n, () => { 
                        i18n.addResources(lang, n, resources[lang]);
                    });
                }
            }
        }
    }
};

// translate with namespace
export const useNamespaceTranslation = namespace => {
    const { t } = useTranslation();
    
    return { 
        t: key => t(`${namespace}:${key}`) 
    };
};