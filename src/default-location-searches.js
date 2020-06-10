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
    id: 'default-london',
    predictionPlace: {
      address: 'London, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.60163086, 0.02033278), new LatLng(51.40018986, -0.23182272)),
    },
  },
  {
    id: 'default-milan',
    predictionPlace: {
      address: 'Milan, Italy',
      bounds: new LatLngBounds(new LatLng(45.535879, 9.278131), new LatLng(45.386746, 9.041552)),
    },
  },
];
