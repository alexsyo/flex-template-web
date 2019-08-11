import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';

import css from './PriceCalculator.css';
import { formatMoney } from '../../util/currency';
import { types as sdkTypes } from '../../util/sdkLoader';
import config from '../../config';

const { Money } = sdkTypes;

class PriceCalculator extends PureComponent {
  state = {
    spaceAvailable: 1
  }

  handleChange = e => this.setState({ spaceAvailable: e.target.value });

  render = () => {
    const { intl } = this.props;
    const spaceAvailableLabel = intl.formatMessage({
      id: 'PriceCaclulator.spaceAvailableLabel',
    });
  
    const price = new Money((this.state.spaceAvailable || 0) * 6000, config.currency);
    const formattedUnitPrice = formatMoney(intl, price);
  
    return (
      <div className={css.priceCalculator}>
        <h2 className={css.priceCalculatorTitle}>
          <FormattedMessage id="PriceCaclulator.title" />
        </h2>
        <label htmlFor="priceCalculator.spaceAvailable">{spaceAvailableLabel}</label>
        <input
          type="number"
          name="priceCalculator.spaceAvailable"
          id="priceCalculator.spaceAvailable"
          className={css.priceCalculatorInput}
          onChange={this.handleChange}
          value={this.state.spaceAvailable}
        />
        <p className={css.priceCalculatorFooter}>
          <span>
            {formattedUnitPrice}&nbsp;
          </span>
          <span>
            <FormattedMessage id="PriceCalculator.footer" />
          </span>
        </p>
      </div>
    );
  }
}

export default compose(injectIntl)(PriceCalculator);