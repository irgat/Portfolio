import React from 'react';
import Enzyme from 'enzyme';
import Separator from '../Separator';

const validData = [
    { label: 'copy' },
];

const mixedData = [
    {},
    { key: 'value' },
].concat(validData);

const separator = (props) => {
    return Enzyme.shallow(<Separator {...props} />);
};

describe('<Separator />', () => {
    it.each(mixedData)('renders a <h3>', (props) => {
        expect(separator(props).find('h3').getElements()).toMatchSnapshot();
    });

    it.each(validData)('renders label', (props) => {
        expect(separator(props).find('h3').text()).toMatch(props.label);
    });
});
