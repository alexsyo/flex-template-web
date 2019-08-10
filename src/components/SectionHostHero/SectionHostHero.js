import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { NamedLink } from '..';

import css from './SectionHostHero.css';

const SectionHostHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHostHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHostHero.subTitle" />
        </h2>
        <NamedLink
          name="NewListingPage"
          className={css.heroButton}
        >
          <FormattedMessage id="SectionHostHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHostHero.defaultProps = { rootClassName: null, className: null };

SectionHostHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHostHero;
