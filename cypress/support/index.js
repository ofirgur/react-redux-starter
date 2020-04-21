// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

export const mobile = 'iphone-6';
export const hd = [3840, 2160];
export const tablet = 'ipad-2';
export const desktop = [1366, 768];

export const allSizes = [mobile, tablet, hd, desktop];

export const envAlias = {
    OldMA: 'OldMA',
    NewMA: 'NewMA',
};

export const gotoPage = (
    { size = desktop, url = 'http://localhost:8080' } = {
        size: desktop,
        url: 'http://localhost:8080',
    },
) => {
    setViewPort(size);
    cy.visit(url);
};

export const setViewPort = size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
};

let modulePath = { [envAlias.OldMA]: '', [envAlias.NewMA]: '' };

export const environments = [
    {
        Alias: envAlias.OldMA,
        Url: 'legacy.html?',
    },
    {
        Alias: envAlias.NewMA,
        Url: '',
    },
];

/**
 * Get url according to environment and module set in initialization using @setModule method
 * @param env
 * @param testEnum
 * @returns {string}
 */
export const getUrl = (env, params) => {
    const { Url } = env;
    if (env.Alias === envAlias.OldMA) {
        return `${Url}${paramsStringBuilder(params)}${
            modulePath.OldMA ? `${modulePath.OldMA}` : ''
        }`;
    } else {
        return `${Url}/${
            modulePath.NewMA ? `${modulePath.NewMA}` : ''
        }?${paramsStringBuilder(params)}`;
    }
};

/**
 * Set my account module both for newMA and OldMa
 * @param newMa
 * @param oldMA
 */
export const setModule = (newMa, oldMA) => {
    modulePath.NewMA = newMa;
    modulePath.OldMA = oldMA;
};

const paramsStringBuilder = (params = {}) => {
    let paramsString = '';
    const numberOfParams = Object.keys(params).length;

    if (numberOfParams > 0) {
        for (const [name, value] of Object.entries(params)) {
            paramsString += `${name}=${value}&`;
        }
    }

    return paramsString;
};
