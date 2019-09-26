import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import leftImage from './images/shelves-demo.jpg';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionHostDescription.css';

// todo: add other images / content
// const DescriptionImage = ({ className, alt, ...rest }) => (
//   <div className={css.stepImageWrapper}>
//     <img className={css.stepImage} alt={alt} {...rest} />
//   </div>
// );
// const LazyImage = lazyLoadWithDimensions(DescriptionImage);

const SectionHostDescription = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <iframe
              className={css.youtube}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l7JBPW6hOOQ" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          </div>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostDescription.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostDescription.text" />
          </p>
          <NamedLink name="NewListingPage">
            <FormattedMessage id="SectionHostDescription.joinLink" />
          </NamedLink>
        </div>
      </div>
    </div>
  );
};

SectionHostDescription.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHostDescription.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHostDescription;
