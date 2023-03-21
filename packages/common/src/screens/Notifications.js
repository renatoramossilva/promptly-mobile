import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';
import {withStyles} from '@ui-kitten/components';
import {createStructuredSelector} from 'reselect';
import {
  fetchNotifications,
  markNotificationsAsOpen,
} from 'actions/notifications';
import {clickNotification} from 'actions/datacollection';
import NotificationsList from 'components/notifications/Notifications.List';
import MobileHeader from 'components/common/MobileHeader';
import {getNotifications} from 'selectors/selected_notifications';
import {getLanguage} from 'selectors/selected_settings';
import {NotificationHeaderStyles} from 'components/notifications/Notifications.Styles';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedNotifications: [],
    };
    this.TabMap = {
      education: {screens: ['Education', 'EducationHome']},
      conditions: {screens: ['Conditions']},
      measurements: {screens: ['Dashboard', 'DashboardMetricsDetails']},
      prom: {screens: ['WebviewSimple'], title: props.t('Questionaire')},
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.props.fetchNotifications();

    this._unsubscribe = navigation.addListener('focus', () => {
      this.props.fetchNotifications();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {t, navigation, eva, language} = this.props;
    const {theme} = eva;

    const notificationAction = (id, uri, category) => {
      this.props.markNotificationsAsOpen([id]).then(({data}) => {
        this.props.onClickNotification({
          origin: 'in_app',
          category: category,
        });

        this.setState({
          openedNotifications: [...this.state.openedNotifications, data[0].id],
        });
        if (!uri) {
          return;
        }

        const [source, action] = uri.split('://');

        let targetTabs = ['HomeWeb'];
        for (var key of Object.keys(this.TabMap)) {
          if (action.includes(key)) {
            targetTabs = this.TabMap[key];
            break;
          }
        }
        if (targetTabs.screens.length > 1) {
          navigation.navigate(targetTabs.screens[0], {
            screen: targetTabs.screens[1],
            params: {
              url: uri,
              from: 'NOTIFICATION',
            },
          });
        } else {
          navigation.navigate(targetTabs.screens[0], {
            url: uri,
            title: targetTabs.title || undefined,
          });
        }
      });
    };

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: theme['color-primary-500']}}>
        <MobileHeader
          noLogo
          title={t('Notifications')}
          innerStyles={NotificationHeaderStyles}
        />
        <NotificationsList
          notifications={this.props.notifications}
          language={language}
          t={t}
          notificationAction={notificationAction}
          openedNotifications={this.state.openedNotifications}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  notifications: getNotifications,
  language: getLanguage,
});

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationsAsOpen,
  onClickNotification: clickNotification,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(withStyles(Notifications)));
