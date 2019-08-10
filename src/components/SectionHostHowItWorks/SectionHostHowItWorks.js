import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { NamedLink } from '..';

import css from './SectionHostHowItWorks.css';

const SectionHostHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHostHowItWorks.titleLineOne" />
        <br />
        <FormattedMessage id="SectionHostHowItWorks.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostHowItWorks.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostHowItWorks.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHostHowItWorks.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHostHowItWorks.part3Text" />
          </p>
        </div>
      </div>

      <div className={css.createListingLink}>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Netherlands&bounds=53.665238%2C7.230902%2C50.750667%2C3.1862592',
          }}>
          <FormattedMessage id="SectionHostHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHostHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHostHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHostHowItWorks;
