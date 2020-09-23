import React from 'react';


import { Button } from '@material-ui/core';
import AccessibleIcon from '@material-ui/icons/Accessible';

const Modules = () => {
    return (
        <div className="material-ui-nav">           
            <Button color="primary" variant="contained">Hello World</Button>
            <br />
            <br />
            <AccessibleIcon />
        </div>
    );
};

export default Modules;