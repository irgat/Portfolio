import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    imagePath: PropTypes.string.isRequired,
    url: PropTypes.string,
    target: PropTypes.string,
};

const defaultProps = {
    url: '#',
    target: '_self',
};

const Icon = (props) => {
    return (
        <li>
            <a href={props.url} target={props.target}>
                <img src={props.imagePath} alt="" />
            </a>
        </li>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
