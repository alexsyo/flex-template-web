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
            <FormattedMessage id="SectionHowItWorksDescription1.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksDescription1.text" />
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
            <FormattedMessage id="SectionHowItWorksDescription2.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksDescription2.text" />
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
            <FormattedMessage id="SectionHowItWorksDescription3.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksDescription3.text" />
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
            <FormattedMessage id="SectionHowItWorksDescription4.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksDescription4.text" />
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
