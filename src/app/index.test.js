import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('App', () => {

    it('should render correctlly', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should styled correctly', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});