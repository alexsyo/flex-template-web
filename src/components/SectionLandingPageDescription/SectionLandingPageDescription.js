import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import laptopImage from './images/laptop.jpg';
import reviewImage from './images/review.jpg';
import carryBoxesImage from './images/carry-boxes.jpg';
import leavingImage from './images/leaving.jpg';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { IconArrowHead } from '../';

import { NamedLink } from '..';

import css from './SectionLandingPageDescription.css';

// todo: add other images / content
const DescriptionImage = ({ className, alt, ...rest }) => (
  <div className={css.stepImageWrapper}>
    <img className={css.stepImage} alt={alt} {...rest} />
  </div>
);
const LazyImage = lazyLoadWithDimensions(DescriptionImage);

const SectionLandingPageDescription = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLandingPageDescription1.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLandingPageDescription1.text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={laptopImage} className={css.stepImage} />
          </div>
        </div>
      </div>

      <div className={css.arrowLeft}>
        <div className={css.arrowImage}>
          <IconArrowHead direction="left" />
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={carryBoxesImage} className={css.stepImage} />
          </div>
        </div>

        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLandingPageDescription2.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLandingPageDescription2.text" />
          </p>
        </div>
      </div>

      <div className={css.arrowRight}>
        <div className={css.arrowImage}>
          <IconArrowHead direction="right" />
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLandingPageDescription3.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLandingPageDescription3.text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={leavingImage} className={css.stepImage} />
          </div>
        </div>
      </div>

      <div className={css.arrowLeft}>
        <div className={css.arrowImage}>
          <IconArrowHead direction="left" />
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={reviewImage} className={css.stepImage} />
          </div>
        </div>
        
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLandingPageDescription4.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLandingPageDescription4.text" />
          </p>
        </div>
      </div>

      <div className={css.steps}>
        <p>
          <NamedLink
            name="SearchPage"
            to={{
              search:
                'address=Netherlands&bounds=53.665238%2C7.230902%2C50.750667%2C3.1862592',
            }}
            className={css.heroButton}
          >
            <FormattedMessage id="SectionHowItWorksHero.browseButton" />
          </NamedLink>
        </p>
      </div>

    </div>
  );
};

SectionLandingPageDescription.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLandingPageDescription.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLandingPageDescription;
