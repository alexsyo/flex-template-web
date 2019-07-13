/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'keys_available',
    label: 'Keys available',
  },
  {
    key: 'security_box',
    label: 'Security box',
  },
  {
    key: 'guardian',
    label: 'Guardian',
  },
  {
    key: 'street_access',
    label: 'Street access',
  },
  {
    key: 'trolley',
    label: 'Trolley',
  },
];

export const categories = [
  { key: 'indoor', label: 'Indoor' },
  { key: 'outdoor', label: 'Outdoor' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
