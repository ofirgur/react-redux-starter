import React from 'react';

import { Link, Switch, Route, Redirect } from 'react-router-dom';

import testmoduleRoutes from 'modules/testmodule/routes';

const Modules = () => {
    return (
        <div className="modules-nav">
            
            <Switch>
                <Route exact path="/modules"><Link className="simple-link" to={"/modules/testmodule"}>Go to Test module</Link></Route>
                {testmoduleRoutes}
                <Redirect to={'/404'} /> 
            </Switch> 
        </div>
    );
};

export default Modules;