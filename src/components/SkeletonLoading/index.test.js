import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SkeletonLoading from './index';
import SkeletonLoadingContainer from './style';
import theme from 'styled/theme';

describe('SkeletonLoading component', () => {

    const props = {};
    const wrapper = shallow(<SkeletonLoading {...props} />);  
    
    it('it should mock the context and render correctly', () => {    
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('it should styled correctly', () => {
        const tree = renderer.create(<SkeletonLoadingContainer theme={theme} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});