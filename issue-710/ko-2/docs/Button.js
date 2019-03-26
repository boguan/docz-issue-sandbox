import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name }) => (
  <button>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
