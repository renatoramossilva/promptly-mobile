import React from 'react';
import {Layout, Spinner} from '@ui-kitten/components';

const LoadingScreen = () => {
  return (
    <Layout
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      testID="loading">
      <Spinner size="giant" />
    </Layout>
  );
};

export default LoadingScreen;
