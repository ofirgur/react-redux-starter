import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeNav from 'navigations/HomeNav';
import MaterialUINav from 'navigations/MaterialUINav';
import ModulesNav from 'navigations/ModulesNav';
import LocalizationNav from 'navigations/LocalizationNav';
import FormsNav from 'navigations/FormsNav';
import ReactNav from 'navigations/ReactNav';
import JavaScriptNav from 'navigations/JavaScriptNav';
import ErrorPage from 'navigations/ErrorPage';

import { siteRoutes } from 'siteMap';

const { home, materialui, modules, localization, forms, react, javascript } = siteRoutes;

const ModulesContainer = () => {
    
    return (
        <div className="modules-container">
            <Switch>
                <Route exact path={home.pathname}><HomeNav /></Route>
                <Route path={materialui.pathname}><MaterialUINav /></Route>
                <Route path={modules.pathname}><ModulesNav /></Route>
                <Route path={localization.pathname}><LocalizationNav /></Route>
                <Route path={forms.pathname}><FormsNav /></Route>
                <Route path={react.pathname}><ReactNav /></Route>
                <Route path={javascript.pathname}><JavaScriptNav /></Route>
                <Route path="*"><ErrorPage /></Route>
            </Switch>
        </div>
    );
};

export default ModulesContainer;