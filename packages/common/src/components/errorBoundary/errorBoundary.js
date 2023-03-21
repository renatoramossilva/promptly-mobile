import React, {Component} from 'react';
import * as Sentry from '@sentry/react-native';
import RNBootSplash from 'react-native-bootsplash';
import RNRestart from 'react-native-restart';
import StatusBanner from '../common/StatusBanner';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    Sentry.setExtra('error', error);
    Sentry.captureException(error);
  }

  restartApp = () => {
    RNBootSplash.show({duration: 250});
    RNRestart.Restart();
  };

  render() {
    const {t} = this.props;
    const status = {
      image: require('../../images/img-500.png'),
      title: t('Oops something went wrong. Please try again'),
      button: {
        label: t('Retry'),
        action: this.restartApp,
      },
    };
    RNBootSplash.hide({duration: 250});
    if (this.state.hasError) {
      return <StatusBanner status={status} style={{paddingHorizontal: 10}} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
