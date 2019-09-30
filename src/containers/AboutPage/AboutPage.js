import React from 'react';
import { compose } from 'redux';
import config from '../../config';
import { injectIntl, FormattedMessage } from '../../util/reactIntl';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = ({ intl }) => {
  const { siteTitle, siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const schemaTitle = intl.formatMessage({ id: 'AboutPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'AboutPage.schemaDescription' });

  // prettier-ignore
  return (
    <StaticPage
      description={schemaDescription}
      title={schemaTitle}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: schemaDescription,
        name: schemaTitle,
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>
            <FormattedMessage id="AboutPage.title" />
          </h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                <FormattedMessage id="AboutPage.sideBar" />
              </p>
            </div>

            <div className={css.contentMain}>
              <h2>
                <FormattedMessage id="AboutPage.paragraphHeader1" />
              </h2>

              <p>
                <FormattedMessage id="AboutPage.paragraph1" />
              </p>

              <h3 className={css.subtitle}>
                <FormattedMessage id="AboutPage.paragraphHeader2" />
              </h3>

              <p>
                <FormattedMessage id="AboutPage.paragraph2" />
              </p>

              <h2 id="contact">
                <FormattedMessage id="AboutPage.getInTouchHeader" />
              </h2>
              <p>
                <FormattedMessage
                  id="AboutPage.getInTouchParagraph1"
                  values={{ email: <a href="mailto:admin@boxitonline.com">admin@boxitonline.com</a> }}
                />
              </p>
              <p>
                <FormattedMessage
                  id="AboutPage.getInTouchParagraph2"
                  values={{
                    facebook: <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink>,
                    twitter: <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink> 
                  }}
                />
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default compose(
  injectIntl
)(AboutPage);
