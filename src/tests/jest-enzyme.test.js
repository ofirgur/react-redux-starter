import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const sum = (x, y) => x + y;
const Button = styled.button`
    background-color: blue;
`;

describe('Jest & Enzyme tests', () => {

    it('should sum correctly', () => {
        expect(sum(3, 7)).toBe(10);
    });

    it('should render correctlly', () => {
        const wrapper = shallow(<Button />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should styled correctly', () => {
        const tree = renderer.create(<Button />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});