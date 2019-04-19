import React from 'react';
import Enzyme from 'enzyme';
import Item from '../Item';

const data = [
    {
        id: '#',
        imagePath: 'folderName/fileName.ext',
        isSelected: true,
        onClick: jest.fn(),
    },
    {
        id: '##',
        imagePath: 'folderName/fileName.ext',
        isSelected: false,
        onClick: jest.fn(),
    },
];

const item = (props) => {
    return Enzyme.shallow(<Item {...props} />);
};

describe.each(data)('<Item />', (props) => {
    it('renders an <img>', () => {
        const wrapper = item(props).find('img');
        expect(wrapper.getElements()).toMatchSnapshot();

        wrapper.simulate('click');
        expect(props.onClick.mock.calls.length).toBe(1);
    });
});
