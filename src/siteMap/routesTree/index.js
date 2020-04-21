import modulesChildRoutes from './modulesChildRoutes';

export default {
    key: 'Home',
    name: 'home',
    pathname: '/',
    title: 'Home.Text',
    icon: 'home',
    childRoutes: [
        {
            key: 'Modules',
            name: 'modules',
            pathname: '/modules',
            title: 'Modules.Text',
            icon: 'view_module',
            childRoutes: modulesChildRoutes
        },
        {
            key: 'Localization',
            name: 'localization',
            pathname: '/localization',
            title: 'I18N.Text',
            icon: 'public'
        },
        {
            key: 'React',
            name: 'react',
            pathname: '/react',
            title: 'React.Text',
            icon: 'code'
        },
        {
            key: 'Forms',
            name: 'forms',
            pathname: '/forms',
            title: 'Forms.Text',
            icon: 'format_align_center'
        },
        {
            key: 'JavaScript',
            name: 'javascript',
            pathname: '/javascript',
            title: 'JavaScript.Text',
            icon: 'format_align_center'
        }
    ]
};