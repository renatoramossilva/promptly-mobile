import React, {useState, useEffect} from 'react';
import {useTheme, Layout, Text} from '@ui-kitten/components';
import {Pressable, Image} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {MobileHeaderStyles} from './MobileHeader.Styles';
import UserAvatar from './UserAvatar';
import {getFileTypeFromUrl} from '../../utils';

const MobileHeader = ({
  onPress,
  avatar,
  name,
  imgSrc,
  title,
  innerStyles,
  noLogo,
}) => {
  const theme = useTheme();
  const [imageSize, setImageSize] = useState(undefined);
  useEffect(() => {
    if (!imgSrc || getFileTypeFromUrl(imgSrc) !== 'png') {
      return;
    }
    Image.getSize(imgSrc, (width, height) => {
      setImageSize({width, height});
    });
  }, []);

  const defaultLogo = !noLogo ? (
    <Image
      source={require('../../images/prom-logo-white.png')}
      style={MobileHeaderStyles.logo}
      testID="mobileheader-logo-default"
    />
  ) : null;

  const renderLogo = (url, originalLogo) => {
    let logoEl = originalLogo;
    const type = getFileTypeFromUrl(url);

    if (type === 'svg') {
      logoEl = <SvgUri style={MobileHeaderStyles.image} uri={url} />;
    }
    if (type === 'png') {
      logoEl = (
        <Image
          style={[
            MobileHeaderStyles.imagePng,
            imageSize ? {aspectRatio: imageSize.width / imageSize.height} : {},
          ]}
          source={{uri: url}}
        />
      );
    }
    return logoEl;
  };

  return (
    <Layout
      style={[
        MobileHeaderStyles.container,
        {backgroundColor: theme['color-primary-500']},
        innerStyles?.container,
      ]}>
      {onPress && (
        <Pressable
          onPress={onPress}
          style={[
            MobileHeaderStyles.avatarContainer,
            {backgroundColor: theme['color-info-500']},
          ]}>
          <UserAvatar userAvatar={avatar} userName={name} />
        </Pressable>
      )}
      {!(imgSrc && imgSrc.length !== 0)
        ? defaultLogo
        : renderLogo(imgSrc, defaultLogo)}
      <Text style={MobileHeaderStyles.title}>{title}</Text>
    </Layout>
  );
};
export default MobileHeader;
