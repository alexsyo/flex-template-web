import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import londonImage from './images/location_london.jpg';
import amsterdamImage from './images/location_amsterdam.jpg';
import milanImage from './images/location_milan.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'London',
          londonImage,
          '?address=address=London%2C%20Greater%20London%2C%20England%2C%20United%20Kingdom&bounds=51.60163086%2C0.02033278%2C51.40018986%2C-0.23182272'
        )}
        {locationLink(
          'Amsterdam',
          amsterdamImage,
          '?address=Amsterdam%2C%20Netherlands&bounds=52.51762811%2C5.12390605%2C52.19380373%2C4.61517488'
        )}
        {locationLink(
          'Milan',
          milanImage,
          '?address=Milan%2C%20Province%20of%20Milan%2C%20Italy&bounds=45.535879%2C9.278131%2C45.386746%2C9.041552'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
