import { siteRoutes } from 'siteMap';

const { home, materialui, modules, localization, forms, react, javascript } = siteRoutes;

export default [
    {
        ...home,
        childRoutes: undefined
    },
    {
        ...materialui
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
