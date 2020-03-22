import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionHowItWorksHero from './SectionHowItWorksHero';

const noop = () => null;

describe('SectionHowItWorksHero', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionHowItWorksHero {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
