import React from 'react';
import Enzyme from 'enzyme';
import ItemList from '../ItemList';

const invalidList = [
    {},
    { key: 'value' },
    { thumbnail: 'folderName/fileName.ext' },
    { name: '#' },
];

const mixedList = [
    { thumbnail: 'folderName/fileName.ext', name: '#' },
    { thumbnail: 'folderName/fileName.ext', name: '##', key: 'value' },
].concat(invalidList);

const itemList = (items) => {
    return Enzyme.shallow(
        <ItemList
            items={items}
            selectedItem='##'
            onClick={jest.fn()}
        />
    );
};

describe('<ItemList />', () => {
    it('filterValidItems() returns 2 items', () => {
        expect(itemList(mixedList).instance().filterValidItems(mixedList)).toMatchSnapshot();
    });

    it('returns null when there is no valid items', () => {
        expect(itemList(invalidList).find('div').getElements()).toMatchSnapshot();
    });

    describe('<div />', () => {
        const wrapper = itemList(mixedList);
        const validItems = wrapper.instance().filterValidItems(mixedList);
        it(`receives ${mixedList.length} item(s), renders ${validItems.length} valid <Item />(s)`, () => {
            expect(wrapper.find('Item')).toHaveLength(validItems.length);
            expect(wrapper.find('div').getElements()).toMatchSnapshot();
        });
    });
});
