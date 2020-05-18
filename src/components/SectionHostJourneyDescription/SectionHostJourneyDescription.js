import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import storageSpaceImage from './images/vdb-storage-front-square.jpg';
import legsImage from './images/legs_800.jpg';
import smartphoneImage from './images/instagram-picture_848.jpg';
import pickingFlowersImage from './images/picking-flowers_800.jpg';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { IconArrowHead } from '../';

import css from './SectionHostJourneyDescription.css';

// todo: add other images / content
const DescriptionImage = ({ className, alt, ...rest }) => (
  <div className={css.stepImageWrapper}>
    <img className={css.stepImage} alt={alt} {...rest} />
  </div>
);
const LazyImage = lazyLoadWithDimensions(DescriptionImage);

const SectionHostJourneyDescription = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostJourneyDescription1.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostJourneyDescription1.text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={storageSpaceImage} className={css.stepImage} />
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
            <LazyImage src={smartphoneImage} className={css.stepImage} />
          </div>
        </div>

        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostJourneyDescription2.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostJourneyDescription2.text" />
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
            <FormattedMessage id="SectionHostJourneyDescription3.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostJourneyDescription3.text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.stepImageWrapper}>
            <LazyImage src={pickingFlowersImage} className={css.stepImage} />
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
            <LazyImage src={legsImage} className={css.stepImage} />
          </div>
        </div>
        
        <div className={css.stepText}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostJourneyDescription4.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostJourneyDescription4.text" />
          </p>
        </div>
      </div>
    </div>
  );
};

SectionHostJourneyDescription.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHostJourneyDescription.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHostJourneyDescription;
