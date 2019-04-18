import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string,
};

const defaultProps = {
    label: null,
};

const Separator = (props) => {
    return <h3>{props.label && props.label}</h3>;
};

Separator.propTypes = propTypes;
Separator.defaultProps = defaultProps;

export default Separator;