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

import css from './FaqPage.css';
import image from './boxes-shaking-hands.jpg';

const scrollToQuestion = (questionId) => {
  const selector = `#${questionId}`;
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }
}

const FaqPage = ({ intl }) => {
  const { siteTitle, siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const schemaTitle = intl.formatMessage({ id: 'FaqPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'FaqPage.schemaDescription' });

  // prettier-ignore
  return (
    <StaticPage
      description={schemaDescription}
      title={schemaTitle}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FaqPage',
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
            <FormattedMessage id="FaqPage.title" />
          </h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                <FormattedMessage id="FaqPage.sideBar" />
              </p>
            </div>

            <div className={css.contentMain}>
              <a
                onClick={() => scrollToQuestion('question1')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question1" />
              </a>
              <a
                onClick={() => scrollToQuestion('question2')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question2" />
              </a>
              <a
                onClick={() => scrollToQuestion('question3')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question3" />
              </a>
              <a
                onClick={() => scrollToQuestion('question4')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question4" />
              </a>
              <a
                onClick={() => scrollToQuestion('question5')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question5" />
              </a>
              <a
                onClick={() => scrollToQuestion('question6')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question6" />
              </a>
              <a
                onClick={() => scrollToQuestion('question7')}
                className={css.questionHeader}
              >
                <FormattedMessage id="FaqPage.question7" />
              </a>


              <h3 id="question1" className={css.question}>
                <FormattedMessage id="FaqPage.question1" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer1" />
              </p>

              <h3 id="question2" className={css.question}>
                <FormattedMessage id="FaqPage.question2" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer2" />
              </p>

              <h3 id="question3" className={css.question}>
                <FormattedMessage id="FaqPage.question3" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer3" />
              </p>

              <h3 id="question4" className={css.question}>
                <FormattedMessage id="FaqPage.question4" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer4" />
              </p>

              <h3 id="question5" className={css.question}>
                <FormattedMessage id="FaqPage.question5" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer5" />
              </p>

              <h3 id="question6" className={css.question}>
                <FormattedMessage id="FaqPage.question6" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer6" />
              </p>

              <h3 id="question7" className={css.question}>
                <FormattedMessage id="FaqPage.question7" />
              </h3>
              <p>
                <FormattedMessage id="FaqPage.answer7" />
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
)(FaqPage);
