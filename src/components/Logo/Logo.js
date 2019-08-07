import React from 'react';
import PropTypes from 'prop-types';

import config from '../../config';
import LogoImage from './boxit-logo.svg';
import LogoIconImage from './boxit-logo-icon.svg';

const Logo = props => {
  const { className, format, ...rest } = props;

    return <img
      className={className}
      src={format === 'desktop' ? LogoImage : LogoIconImage}
      alt={config.siteTitle}
      {...rest}
    />;
  

};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
