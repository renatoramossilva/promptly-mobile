import React from 'react';
import ProviderForm from './Provider.Form';
import ProviderOauth from './Provider.Oauth';
import ProviderBT from './Provider.BT';

const DevicesConnect = (props) => {
  const {provider} = props.route.params;

  try {
    if (provider === 'OauthProvider') {
      return <ProviderOauth {...props} />;
    }
    if (provider === 'FormProvider') {
      return <ProviderForm {...props} />;
    }
    return <ProviderBT {...props} />;
  } catch (error) {
    throw new Error(error);
  }
};

export default DevicesConnect;
