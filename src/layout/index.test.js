import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

jest.mock('react-redux', () => ({
    useDispatch: () => f => f(),
    useSelector: () => true
}));

describe('Layout', () => {

    it('should render correctlly', () => {
        const wrapper = shallow(<Layout />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should styled correctly', () => {
        const tree = renderer.create(<Layout />).toJSON()
        expect(tree).toMatchSnapshot()
    });

});

/**

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
//import Layout from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const getComponent = selector => {
    jest.resetModules();
    jest.doMock('react-redux', () => ({
        __esModule: true,
        default: jest.fn(() => {}),
        useDispatch: () => f => f(),
        useSelector: func => func.name === selector
    }));

    return require('./index.js').default;
}

describe('Layout', () => {

    it('should render correctlly', () => {
        const Layout = getComponent('isFetching');
        const wrapper = shallow(<Layout />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should styled correctly', () => {
        const Layout = getComponent();
        const tree = renderer.create(<Layout />).toJSON();
        expect(tree).toMatchSnapshot()
    });

});

 */