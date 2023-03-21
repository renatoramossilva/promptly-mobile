import React, {useState, useEffect} from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import PromptlyIcon from '../../common/PromptlyIcon';
import {MyAccountPrivacyItemStyles} from '../MyAccount.Styles';
import {TouchableOpacity, Image} from 'react-native';
import MyAccountPrivacyPopup from './MyAccount.Privacy.Popup';
import {getFileTypeFromUrl, getImageAbsoluteUrl} from 'utils';
import {SvgUri} from 'react-native-svg';

const renderStatus = (t, agreed, theme) => {
  const label = agreed ? t('Active') : t('Revoked');
  const icon = agreed ? 'check' : 'times';
  return (
    <Layout
      style={[
        MyAccountPrivacyItemStyles.statusWrapper,
        {
          backgroundColor: agreed
            ? theme['color-success-500']
            : theme['color-warning-500'],
        },
      ]}>
      <PromptlyIcon name={icon} style={MyAccountPrivacyItemStyles.statusIcon} />
      <Text style={MyAccountPrivacyItemStyles.statusLabel} testID="statusLabel">
        {label}
      </Text>
    </Layout>
  );
};

const MyAccountPrivacyItem = ({item, t, handleSubmit, clickOpenItem}) => {
  const theme = useTheme();
  const [displayPopup, setDisplayPopup] = useState(false);
  const [imageSize, setImageSize] = useState(undefined);

  useEffect(() => {
    if (!item.logo || getFileTypeFromUrl(item.logo) !== 'png') {
      return;
    }
    Image.getSize(item.logo, (width, height) => {
      setImageSize({width, height});
    });
  }, []);

  return (
    <Layout
      key={item.id}
      style={[MyAccountPrivacyItemStyles.cardContainer]}
      testID="itemCard">
      {renderStatus(t, item.agreed, theme)}
      {(item.logo && (
        <Layout style={MyAccountPrivacyItemStyles.logoContainer}>
          {getFileTypeFromUrl(item.logo) === 'png' && imageSize && (
            <Image
              style={[
                MyAccountPrivacyItemStyles.logoImage,
                {aspectRatio: imageSize.width / imageSize.height},
              ]}
              source={{uri: getImageAbsoluteUrl(item.logo)}}
            />
          )}
          {item.logo && getFileTypeFromUrl(item.logo) === 'svg' && (
            <SvgUri
              style={MyAccountPrivacyItemStyles.logoImage}
              uri={getImageAbsoluteUrl(item.logo)}
            />
          )}
        </Layout>
      )) ||
        (!item.logo && (
          <Layout style={MyAccountPrivacyItemStyles.titleContainer}>
            <Text style={{fontSize: 18}} testID="clinicalTrialDisplay">
              {item.title}
            </Text>
          </Layout>
        ))}
      <Layout style={MyAccountPrivacyItemStyles.iconWrapper}>
        <TouchableOpacity
          onPress={() => {
            clickOpenItem({name: item.title});
            setDisplayPopup(true);
          }}
          testID="configButton">
          <PromptlyIcon
            name="cog"
            style={[
              MyAccountPrivacyItemStyles.icon,
              {color: theme['color-basic-300']},
            ]}
          />
        </TouchableOpacity>
      </Layout>
      <MyAccountPrivacyPopup
        open={displayPopup}
        item={item}
        closePopup={() => setDisplayPopup(false)}
        t={t}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default MyAccountPrivacyItem;
