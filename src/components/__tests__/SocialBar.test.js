import React from 'react';
import Enzyme from 'enzyme';
import SocialBar from '../SocialBar';

const invalidList = [
    {},
    { key: 'value' },
    { url: 'https://www.w3.org' },
    { url: 'https://www.w3.org', target: '_blank' },
    { target: '_blank' },
];

const mixedList = [
    { imagePath: 'folderName/fileName.ext' },
    { imagePath: 'folderName/fileName.ext', url: 'https://www.w3.org' },
    { imagePath: 'folderName/fileName.ext', url: 'https://www.w3.org', target: '_blank' },
    { imagePath: 'folderName/fileName.ext', target: '_blank' },
].concat(invalidList);

const socialBar = (itemList) => {
    return Enzyme.shallow(<SocialBar items={itemList} />);
};

describe('<SocialBar />', () => {
    it('filterValidItems() returns 4 items', () => {
        expect(socialBar(mixedList).instance().filterValidItems(mixedList)).toMatchSnapshot();
    });

    it('returns null when there is no valid items', () => {
        expect(socialBar(invalidList).find('ul').getElements()).toMatchSnapshot();
    });

    describe('<ul />', () => {
        const wrapper = socialBar(mixedList);
        const validItems = wrapper.instance().filterValidItems(mixedList);
        it(`receives ${mixedList.length} item(s), renders ${validItems.length} valid <Icon />(s)`, () => {
            expect(wrapper.find('Icon')).toHaveLength(validItems.length);
            expect(wrapper.find('ul').getElements()).toMatchSnapshot();
        });
    });
});
