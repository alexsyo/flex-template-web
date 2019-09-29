import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { NamedLink } from '..';

import css from './SectionHowItWorksHero.css';

const SectionHowItWorksHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHowItWorksHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHowItWorksHero.subTitle" />
        </h2>
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
      </div>
    </div>
  );
};

SectionHowItWorksHero.defaultProps = { rootClassName: null, className: null };

SectionHowItWorksHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorksHero;
