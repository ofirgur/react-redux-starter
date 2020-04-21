/// <reference types="Cypress" />

import {
    allSizes,
    gotoPage,
    mobile,
    tablet
} from '../../../cypress/support';

allSizes.forEach(size => {
    describe(`${size}: APP LAYOUT`, () => {

        beforeEach(() => {
            gotoPage({
                size,
                url: 'localhost:3000/'
            });
        });

        if(size === mobile) {
            it('mobile: render correctly', () => {
                cy.get('.layout').click();
            });
        }
        if(size === tablet) {
            it('mobile: render correctly', () => {
                cy.get('.layout').click();
            });
        }
        else {
            it('mobile: render correctly', () => {
                cy.get('.layout').click();
            });
        }
    });
});