import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-amsterdam',
    predictionPlace: {
      address: 'Amsterdam, Netherlands',
      bounds: new LatLngBounds(new LatLng(52.51762811, 5.12390605), new LatLng(52.19380373, 4.61517488)),
    },
  },
  {
    id: 'default-utrecht',
    predictionPlace: {
      address: 'Utrecht, Netherlands',
      bounds: new LatLngBounds(new LatLng(52.135661, 5.195132), new LatLng(52.026243, 5.01780)),
    },
  },
  {
    id: 'default-rotterdam',
    predictionPlace: {
      address: 'Rotterdam, Netherlands',
      bounds: new LatLngBounds(new LatLng(51.994305, 4.601433), new LatLng(51.861633, 4.37917)),
    },
  },
];
