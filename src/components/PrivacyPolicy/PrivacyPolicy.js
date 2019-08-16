import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: October 30, 2017</p>

      <p>
        It is Boxitonline's policy to respect your privacy regarding any information we may collect while operating our websites.
      </p>

      <p>
        Our policy in easy to read format:
      </p>

      <p>
        <ul>
          <li>
            - We don’t ask you for your personal data unless we truly need it.
          </li>
          <li>
            - We don’t share your personal data with anyone except to comply with the law, develop our products, 
            or protect our rights.
          </li>
          <li>
            - We don’t store personal data on our servers unless required for the on-going operation of one of our services.
          </li>
        </ul>
      </p>

      <h2>1) Website Visitors</h2>
      <p>
        Like most website operators, Boxitonline collects non-personally-identifying information of the sort that web browsers 
        and servers typically make available, such as the browser type, language preference, referring site, 
        and the date and time of each visitor request. Boxitonline’s purpose in collecting non-personally identifying information 
        is to better understand how Boxitonline’s visitors use its website. From time to time, Boxitonline may release 
        non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
        Boxitonline also collects potentially personally-identifying information like Internet Protocol (IP) addresses 
        for logged in users and for users leaving comments on WordPress.com blogs. 
        Boxitonline only discloses logged in user and commenter IP addresses under the same circumstances that it uses and 
        discloses personally-identifying information as described below, except that blog commenter IP addresses and email 
        addresses are visible and disclosed to the administrators of the blog where the comment was left.
      </p>

      <h2>2) Gathering of Personally-Identifying Information</h2>
      <p>
        Certain visitors to Boxitonline’s websites choose to interact with Boxitonline in ways that require Boxitonline 
        to gather personally-identifying information. The amount and type of information that Boxitonline gathers depends 
        on the nature of the interaction.  In each case, Boxitonline collects such information only insofar as is necessary or 
        appropriate to fulfill the purpose of the visitor’s interaction with Boxitonline. 
        Boxitonline does not disclose personally-identifying information other than as described below. 
        And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from 
        engaging in certain website-related activities.
      </p>

      <h2>3) Aggregated Statistics</h2>
      <p>
        Boxitonline may collect statistics about the behavior of visitors to its websites.  
        Boxitonline may display this information publicly or provide it to others. However, 
        Boxitonline does not disclose personally-identifying information other than as described below.
      </p>

      <h2>4) Protection of Certain Personally-Identifying Information</h2>
      <p>
        Boxitonline discloses potentially personally-identifying and personally-identifying information only 
        to those of its employees, contractors and affiliated organizations that 
        (i) need to know that information in order to process it on Boxitonline’s behalf or to provide 
        services available at Boxitonline’s websites, and 
        (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated 
        organizations may be located outside of your home country; by using Boxitonline’s websites, you consent to the transfer of 
        such information to them. Boxitonline will not rent or sell potentially personally-identifying and 
        personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, 
        as described above, Boxitonline discloses potentially personally-identifying and personally-identifying information 
        only in response to a subpoena, court order or other governmental request, or when Boxitonline believes in good faith that 
        disclosure is reasonably necessary to protect the property or rights of Boxitonline, third parties or the public at large. 
        If you are a registered user of Boxitonline website and have supplied your email address, Boxitonline may occasionally 
        send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on 
        with Boxitonline and our products.  We expect to keep this type of email to a minimum. 
        If you send us a request (for example via a support email or via one of our feedback mechanisms), 
        we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. 
        Boxitonline takes all measures reasonably necessary to protect against the unauthorized access, use, 
        alteration or destruction of potentially personally-identifying and personally-identifying information.
      </p>

      <h2>5) Cookies</h2>
      <p>
        A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser 
        provides to the website each time the visitor returns. Boxitonline uses cookies to help Boxitonline identify and 
        track visitors, their usage of Boxitonline website, and their website access preferences. 
        Boxitonline visitors who do not wish to have cookies placed on their computers should set their browsers to refuse 
        cookies before using Boxitonline’s websites, with the drawback that certain features of Boxitonline’s websites may 
        not function properly without the aid of cookies.
      </p>

      <h2>6) Business Transfers</h2>
      <p>
        If Boxitonline, or substantially all of its assets, were acquired, or in the unlikely event that Boxitonline 
        goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or 
        acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Boxitonline 
        may continue to use your personal information as set forth in this policy.
      </p>

      <h2>7) Ads</h2>
      <p>
        Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies. 
        These cookies allow the ad server to recognize your computer each time they send you an online advertisement 
        to compile information about you or others who use your computer. This information allows ad networks to, 
        among other things, deliver targeted advertisements that they believe will be of most interest to you. 
        This Privacy Policy covers the use of cookies by Boxitonline and does not cover the use of cookies by any advertisers.
      </p>

      <h2>8) Privacy Policy Changes</h2>
      <p>
        Although most changes are likely to be minor, Boxitonline may change its Privacy Policy from time to time, 
        and in Boxitonline’s sole discretion. Boxitonline encourages visitors to frequently check this page for any c
        hanges to its Privacy Policy.  Your continued use of this site after any change in this Privacy Policy will 
        constitute your acceptance of such change.
      </p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
