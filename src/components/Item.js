import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.any.isRequired,
    imagePath: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
};

const defaultProps = {
    onMouseOver: () => { },
    onMouseOut: () => { },
};

const Item = (props) => {
    return <img src={props.imagePath} alt="" id={props.id} onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} />;
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;