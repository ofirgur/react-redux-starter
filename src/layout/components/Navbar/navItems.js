import { siteRoutes } from 'siteMap';

const { home, modules, localization, forms, react, javascript } = siteRoutes;

export default [
    {
        ...home,
        childRoutes: undefined
    },
    {
        ...modules
    },
    {
        ...localization
    },
    {
        ...forms
    },
    {
        ...react
    },
    {
        ...javascript
    }
];
