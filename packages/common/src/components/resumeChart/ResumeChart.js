import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import PromptlyIcon from '../common/PromptlyIcon';
import ResumeChartResultHolder from './ResumeChart.ResultHolder';
import {useTranslation} from 'react-i18next';
import {ResumeChartStyles} from './ResumeChart.Styles';
import ResumeChartValueMarker from './ResumeChart.ValueMarker';

const getRotation = (percentage, finalDeg, total = 100, padding = 0) =>
  percentage ? (percentage * finalDeg) / total - padding : 0;

const ResumeChart = ({
  graphWidth,
  graphHeight,
  lastScore,
  gradientStart,
  gradientEnd,
}) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const lastScorePrecentage = lastScore
    ? Math.round(lastScore.percentage, 0)
    : 0;
  const lastScoreRotation = getRotation(
    lastScorePrecentage,
    180,
    lastScore?.total,
  );
  const avgScorePrecentage = lastScore
    ? Math.round(lastScore.literature_average, 0)
    : 0;
  const avgScoreRotation = getRotation(
    avgScorePrecentage,
    180,
    lastScore?.total,
  );

  return (
    <View
      testID="ResumeChart"
      style={{width: graphWidth, height: graphHeight + 50}}>
      <View style={[ResumeChartStyles.iconContainer, {left: 5}]}>
        <PromptlyIcon
          name="smileNeutral"
          style={[
            ResumeChartStyles.emoticon,
            {color: theme['promptly-blue-300']},
          ]}
        />
      </View>
      <View style={[ResumeChartStyles.iconContainer, {right: 5}]}>
        <PromptlyIcon
          name="smileVeryHappy"
          style={[
            ResumeChartStyles.emoticon,
            {color: theme['promptly-blue-300']},
          ]}
        />
      </View>
      <ResumeChartValueMarker
        circleColor={theme['promptly-blue-400']}
        circleSize={45}
        circleStyle={{left: -12, elevation: 10}}
        scoreRotation={lastScoreRotation}
        animate
        graphWidth={graphWidth}
      />
      <ResumeChartValueMarker
        circleColor={theme['color-basic-300']}
        circleSize={27}
        circleStyle={{left: -4, elevation: 10}}
        scoreRotation={avgScoreRotation}
        graphWidth={graphWidth}
      />
      <View
        style={[
          ResumeChartStyles.semiCircleContainer,
          {width: graphWidth, height: graphHeight},
        ]}>
        <View
          style={[
            ResumeChartStyles.semiCircle,
            {width: graphWidth - 30, height: graphHeight * 2},
          ]}>
          <LinearGradient
            colors={[gradientStart, gradientEnd]}
            style={{height: '100%', width: '100%'}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        </View>
        <View
          style={[
            ResumeChartStyles.semiCircleCover,
            {width: graphWidth - 60, height: graphHeight * 2 - 30},
          ]}>
          <ResumeChartResultHolder
            graphHeight={graphHeight}
            lastScore={lastScore}
            label={t('Your assessment score')}
          />
        </View>
      </View>
    </View>
  );
};

export default ResumeChart;
