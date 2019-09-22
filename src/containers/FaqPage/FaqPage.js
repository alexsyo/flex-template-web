import React from 'react';
import config from '../../config';
import { FormattedMessage } from '../../util/reactIntl'
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

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
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
              <p>We built Boxitonline to meet locals and newcomers needs!</p>
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

              <h2 id="contact">
                Get in touch
              </h2>
              <p>
                We are happy to help you in anything you have in your mind.
                Best way to reach us is by emailing us at{' '}
                <ExternalLink href="mailto:admin@boxitonline.com">admin@boxitonline.com</ExternalLink>.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
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

export default AboutPage;
