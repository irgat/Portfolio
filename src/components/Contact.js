import React from 'react';
import PropTypes from 'prop-types';

const errorMessage = `One of the props, 'mailto' or 'tel' is required.`;

const propTypes = {
    mailto: (props, propName, componentName) => {
        if (props.mailto) {
            PropTypes.checkPropTypes({ mailto: PropTypes.string }, { mailto: props.mailto }, propName, componentName);
        } else if (!props.tel) {
            return new Error(errorMessage);
        }
    },
    tel: (props, propName, componentName) => {
        if (props.tel) {
            PropTypes.checkPropTypes({ tel: PropTypes.string }, { tel: props.tel }, propName, componentName);
        } else if (!props.mailto) {
            return new Error(errorMessage);
        }
    },
};

const defaultProps = {

};

const Contact = (props) => {
    let protocol = props.mailto ? 'mailto:' : 'tel:';
    let ref = props.mailto || props.tel;
    return (
        <a href={protocol + ref}>
            <p>{ref}</p>
        </a>
    );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
