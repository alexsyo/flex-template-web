import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import leftImage from './images/shelves-demo.jpg';
import laptopImage from './images/laptop.jpg';
import reviewImage from './images/review.jpg';
import carryBoxesImage from './images/carry-boxes.jpg';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionHowItWorksDescription.css';

// todo: add other images / content
const DescriptionImage = ({ className, alt, ...rest }) => (
  <div className={css.stepImageWrapper}>
    <img className={css.stepImage} alt={alt} {...rest} />
  </div>
);
const LazyImage = lazyLoadWithDimensions(DescriptionImage);

const SectionHostDescription = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostDescription.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostDescription.text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={laptopImage} className={css.stepImage} />
          </div>
        </div>
      </div>

      <div className={css.arrowLeft}>
        <div className={css.arrowImage} />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={carryBoxesImage} className={css.stepImage} />
          </div>
        </div>

        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostDescription.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostDescription.text" />
          </p>
        </div>
      </div>

      <div className={css.arrowRight}>
        <div className={css.arrowImage} />
      </div>

      <div className={css.steps}>
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostDescription.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostDescription.text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={reviewImage} className={css.stepImage} />
          </div>
        </div>
      </div>

      <div className={css.arrowLeft}>
        <div className={css.arrowImage} />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={reviewImage} className={css.stepImage} />
          </div>
        </div>
        
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostDescription.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostDescription.text" />
          </p>
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
