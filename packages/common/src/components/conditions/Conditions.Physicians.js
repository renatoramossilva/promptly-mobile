import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import Carousel from 'react-native-snap-carousel';
import {
  ConditionsDiseaseReviewStyles,
  ConditionsPhysiciansStyles,
} from './Conditions.Styles';
import UserAvatar from '../common/UserAvatar';

const ConditionsPhysicians = ({items}) => {
  const theme = useTheme();

  const _renderItem = ({item}) => {
    return (
      <View
        style={[
          ConditionsDiseaseReviewStyles.cardContainer,
          ConditionsPhysiciansStyles.carouselItemContainer,
        ]}>
        <Layout
          style={[
            ConditionsPhysiciansStyles.carouselItem,
            {backgroundColor: theme['color-info-500']},
          ]}>
          <UserAvatar
            userAvatar={item.image.src}
            userName={item.shortName}
            textStyle={ConditionsPhysiciansStyles.avatarText}
          />
        </Layout>
        <Text
          category="h1"
          style={ConditionsPhysiciansStyles.shortName}
          testID="shortName">
          {item.shortName}
        </Text>
      </View>
    );
  };
  const windowWidth = useWindowDimensions().width;
  return (
    <Carousel
      layout={'default'}
      data={items}
      renderItem={_renderItem}
      sliderWidth={windowWidth}
      itemWidth={windowWidth - 20}
      inactiveSlideOpacity={1}
    />
  );
};
export default ConditionsPhysicians;
