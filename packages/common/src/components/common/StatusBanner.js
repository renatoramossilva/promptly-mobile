import {Text, Layout, Spinner, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StatusBannerStyles} from './StatusBanner.Styles';
import Button from './Button';
import {Image} from 'react-native';

const StatusBanner = ({status, style, innerStyles}) => {
  const theme = useTheme();
  const getRatio = (image) => {
    const {width, height} = Image.resolveAssetSource(image);
    return width / height;
  };
  const loadingStyle = status.loadingStyle || {};

  return (
    <Layout testID="statusbanner" style={[StatusBannerStyles.container, style]}>
      {status.image && (
        <Layout>
          <Image
            source={status.image}
            style={[
              StatusBannerStyles.image,
              innerStyles?.image,
              status.imageFull
                ? [
                    StatusBannerStyles.imageFull,
                    {aspectRatio: getRatio(status.image)},
                  ]
                : [StatusBannerStyles.image],
            ]}
          />
        </Layout>
      )}
      {status.loading && (
        <Layout style={StatusBannerStyles.loadingHolder}>
          <Layout style={[StatusBannerStyles.spinnerHolder, loadingStyle]}>
            <Spinner />
          </Layout>
        </Layout>
      )}
      <Layout
        style={[StatusBannerStyles.textContainer, innerStyles?.textContainer]}>
        {status.title && (
          <Text
            testID="statusBannerTitle"
            style={[StatusBannerStyles.title, innerStyles?.title]}
            category="h1">
            {status.title}
          </Text>
        )}
        {status.subtitle && (
          <Text
            testID="statusBannerSubtitle"
            style={[
              StatusBannerStyles.subtitle,
              innerStyles?.subtitle,
              {color: theme['color-basic-300']},
            ]}
            category="h5">
            {status.subtitle}
          </Text>
        )}
      </Layout>
      {status.button && (
        <Button
          accessibilityLabel={status.button.label}
          onPress={() => {
            status.button.action();
          }}
          status="primary">
          {status.button.label}
        </Button>
      )}
    </Layout>
  );
};

export default StatusBanner;
