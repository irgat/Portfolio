import React from 'react';
import Enzyme from 'enzyme';
import Icon from '../Icon';

const data = [
    { imagePath: 'folderName/fileName.ext' },
    { imagePath: 'folderName/fileName.ext', url: 'https://www.w3.org' },
    { imagePath: 'folderName/fileName.ext', url: 'https://www.w3.org', target: '_blank' },
    { imagePath: 'folderName/fileName.ext', target: '_blank' },
];

const icon = (props) => {
    return Enzyme.shallow(<Icon {...props} />);
};

describe.each(data)('<Icon />', (props) => {
    it('renders a <li>', () => {
        expect(icon(props).find('li').getElements()).toMatchSnapshot();
    });

    describe('<li />', () => {
        it('renders an <a>', () => {
            expect(icon(props).find('a')).toHaveLength(1);
        });

        describe('<a />', () => {
            it('renders an <img>', () => {
                expect(icon(props).find('img')).toHaveLength(1);
            });
        });
    });
});
