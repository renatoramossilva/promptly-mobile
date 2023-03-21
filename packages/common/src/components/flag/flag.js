import get from 'lodash/get';
import Config from 'react-native-config';

export const hasFeatureWaffle = (feature, waffle = Config.waffle) => {
  waffle = waffle ? JSON.parse(waffle) : undefined;
  return waffle ? waffle[feature] : false;
};

export const hasFeature = (instance, feature) => {
  let items = instance;

  if (!Array.isArray(instance)) {
    items = [instance];
  }
  return items.some((i) =>
    get(i, `configurations.features.${feature}.enabled`, false),
  );
};
