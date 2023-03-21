import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';
import _ from 'lodash';
import {TouchableWithoutFeedback, Animated, Image} from 'react-native';
import {withStyles, Text, Layout} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastMessagesStyles} from './Toast.Messages.Styles';
import {
  checkLocationPermission,
  requestLocationPermission,
  isAndroid,
  countryToLanguageParser,
} from 'utils';

class ToastMessages extends Component {
  constructor(props) {
    super();
    this.manager = props.ble;
    this.state = {
      show: false,
      payload: {},
      fadeAnimation: new Animated.Value(0),
    };
    this.timer = undefined;
  }

  fadeIn = () => {
    this.setState({show: true});
    clearTimeout(this.timer);
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.timer = setTimeout(() => {
        this.fadeOut();
      }, 6000);
    });
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.setState({show: false});
    });
  };

  messageColors = {
    error: 'red',
    info: '#0E416C',
  };

  showToast = (toast) => {
    this.setState({
      payload: {
        title: toast.title || undefined,
        message: toast.message || undefined,
        onPress: toast.onPress || null,
        icon: toast.icon || undefined,
        image: toast.image || undefined,
        size: toast.size || 30,
      },
    });
    this.fadeIn();
  };

  hideToast = () => {
    this.fadeOut();
  };

  listenToState = () => {
    this.manager.onStateChange((state) => {
      if (state === 'PoweredOff') {
        const toast = {
          title: this.props.t('Bluetooth not connected'),
          message: this.props.t(
            'Devices need bluetooth turned on to sync measurements',
          ),
          image: require('../../images/img-bt-off.png'),
          size: 50,
        };
        this.showToast(toast);
      }
    }, true);
  };

  requestPermissions = async () => {
    const askPerms = await requestLocationPermission();
    if (!askPerms) {
      const toast = {
        message: this.props.t(
          'Please give the app location permissions for bluetooth functionalities. Please press this notification to give permissions.',
        ),
        type: 'info',
        onPress: () => this.requestPermissions(),
      };
      this.showToast(toast);
    } else {
      this.listenToState();
    }
  };

  checkPermissions = async () => {
    try {
      const perms = await checkLocationPermission();
      if (!perms) {
        throw 'error';
      }
    } catch (error) {
      throw error;
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.toast && !_.isEqual(this.props.toast, prevProps.toast)) {
      this.props.toast.title = this.props.t(this.props.toast.title);
      this.props.toast.message = this.props.t(this.props.toast.message);
      this.showToast(this.props.toast);
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('@user').then(result => {
      const user = JSON.parse(result);
      const lang = user?.user?.preferences?.regional?.language;
      const parsedLang = countryToLanguageParser(lang);

      if (lang) {
        this.props.i18n.loadTranslation(parsedLang);
      }

      if (!isAndroid()) {
        this.listenToState();
        return;
      }

      this.checkPermissions()
        .then(() => this.listenToState())
        .catch(() => this.requestPermissions());
    });
  }

  render() {
    if (!this.state.show) {
      return null;
    }
    const {theme} = this.props.eva;
    const {image, title, message, onPress, size} = this.state.payload;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (!this.state.payload.onPress) {
            this.hideToast();
          } else {
            onPress();
          }
        }}>
        <Animated.View
          needsOffscreenAlphaCompositing
          style={[
            ToastMessagesStyles.container,
            {opacity: this.state.fadeAnimation},
          ]}>
          <Layout style={ToastMessagesStyles.body}>
            {image && (
              <Layout style={ToastMessagesStyles.imageHolder}>
                <Image
                  source={image}
                  style={[
                    ToastMessagesStyles.image,
                    {width: size, height: size},
                  ]}
                />
              </Layout>
            )}
            <Layout style={ToastMessagesStyles.textHolder}>
              {title && (
                <Text style={ToastMessagesStyles.title} category="h1">
                  {title}
                </Text>
              )}
              {message && (
                <Text
                  style={[
                    ToastMessagesStyles.text,
                    {color: theme['color-basic-200']},
                  ]}>
                  {message}
                </Text>
              )}
            </Layout>
          </Layout>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = ({toast}) => {
  return {toast};
};

export default connect(
  mapStateToProps,
  {},
)(withTranslation()(withStyles(ToastMessages)));
