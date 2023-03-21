import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import {moment} from 'utils/dates';
import PropTypes from 'prop-types';
import {noop} from 'utils';
import Modal from 'components/common/Modal';
import Circle from 'components/common/Circle';
import PromptlyIcon from 'components/common/PromptlyIcon';
import {MetricsECGPopUpStyles, MetricsECGCardStyles} from './Metrics.Styles';

const MetricsECGPopUp = ({
  open,
  closePopup,
  items,
  onSelectItem,
  activeItem,
}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const onHideModal = () => {
    closePopup();
  };

  return (
    <Modal modalVisible={open} hideModal={onHideModal}>
      <Layout style={MetricsECGPopUpStyles.header}>
        <Text category="h1" style={MetricsECGPopUpStyles.headerTitle}>
          {t('All ECG records')}
        </Text>
        <Text style={{fontSize: 17, color: theme['color-basic-200']}}>
          {t('ECG records by date available to you')}
        </Text>
      </Layout>
      {items.map(item => (
        <TouchableOpacity
          onPress={() => onSelectItem(item)}
          key={item.id?.toString()}
          style={[
            MetricsECGPopUpStyles.container,
            {borderTopColor: theme['color-basic-transparent-200']},
          ]}
          testID="MetricsECGPopUpItem">
          <Circle
            color={item?.color}
            size={MetricsECGPopUpStyles.circleSize}
            border={0}
            shadow={false}
            style={MetricsECGCardStyles.circle}
          />
          <Layout style={{flex: 1}}>
            <Text
              category="h1"
              style={MetricsECGCardStyles.title}
              testID="MetricsECGPopUpItemTitle">
              {item.title}
            </Text>
            <Text
              style={[
                MetricsECGCardStyles.title,
                {color: theme['color-basic-200']},
              ]}
              testID="MetricsECGPopUpItemDate">
              {moment(item.date).local().format('LL - HH:mm')}
            </Text>
          </Layout>
          {item.id === activeItem?.id ? (
            <Layout
              style={MetricsECGPopUpStyles.iconContainer}
              testID="MetricsECGPopUpItemCheck">
              <PromptlyIcon
                name="check"
                color={theme['color-success-500']}
                size={MetricsECGPopUpStyles.iconSize}
              />
            </Layout>
          ) : null}
        </TouchableOpacity>
      ))}
    </Modal>
  );
};

MetricsECGPopUp.defaultProps = {
  open: false,
  closePopup: noop,
  items: [],
  onSelectItem: noop,
};

MetricsECGPopUp.propTypes = {
  open: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
};

export default MetricsECGPopUp;
