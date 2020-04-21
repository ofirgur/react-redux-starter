import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Footer from './index';
import FooterContainer from './style';
import theme from 'styled/theme';


describe('Footer component', () => {

    const wrapper = shallow(<Footer />);  
    
    it('it should mock the context and render correctly', () => {    
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('it should styled correctly', () => {
        const tree = renderer.create(<FooterContainer theme={theme} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});