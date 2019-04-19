import React from 'react';
import Enzyme from 'enzyme';
import Contact from '../Contact';

const data = [
    { mailto: 'local-part@domain' },
    { tel: "XXXXX XXXXXX" },
];

const contact = (props) => {
    return Enzyme.shallow(<Contact {...props} />);
};

describe.each(data)('<Contact />', (props) => {
    it('renders an <a>', () => {
        expect(contact(props).find('a').getElements()).toMatchSnapshot();
    });

    describe('<a />', () => {
        it('renders a <p>', () => {
            expect(contact(props).find('p')).toHaveLength(1);
        });
    });
});
