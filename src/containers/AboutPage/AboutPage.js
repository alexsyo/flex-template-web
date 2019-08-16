import React from 'react';
import config from '../../config';
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
          <h1 className={css.pageTitle}>Experience the unique Finnish home sauna.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>We built Boxitonline to meet locals and newcomers needs!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                We all have some free space lying around in our homes and we could use some extra cash.
                On the other end everyone that is moving in, out or across a country may need a place 
                to temporarily store his extra boxes and luggages, but he doesn’t have local friends 
                to hold them.
              </h2>

              <p>
                To meet the needs of this travelers, who relocate to work or study in a place far from 
                their home, we created Boxit-online: a place where travelers can get in touch with locals 
                and ask them some help by holding their belongings for a little while.
              </p>

              <h3 className={css.subtitle}>Have you got free space in your garage or closet?</h3>

              <p>
                Boxitonline offers you a good way to earn some extra cash! If you're not using your garage, 
                why not rent it to other people while it's free. And even if you are using your garage 
                (we understand, it's your favourite playground!), why not invite other people to lay down 
                their boxes in a corner? They will be taken care as if they were your own treasures.
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
