import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.oneOf(['', 'primary', 'secondary', 'success', 'warning', 'danger']),
  position: PropTypes.oneOf(['', 'start', 'between', 'end']),
  size: PropTypes.oneOf(['', 'xs', 'sm', 'lg', 'xl']),
  asText: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  className: '',
  color: '',
  position: '',
  size: '',
  asText: false,
};

export const ButtonKO = (props) => {
  const {
    tag: Tag,
    ...attributes
  } = props;

  return (
    <Tag {...attributes} />
  );
};

ButtonKO.propTypes = propTypes;
ButtonKO.defaultProps = defaultProps;
