import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import MetricsChartsSelect from './Metrics.Charts.Select';
import EmptyChart from '../common/EmptyChart';
import TabSelector from '../common/TabSelector';
import Card from '../common/Card';
import {MetricsChartsStyles} from './Metrics.Styles';

const MetricsChartsAll = ({
  type,
  dataArr = [],
  limitLines = [],
  chartFilters,
  selectedFilter,
  onChangeFilter,
  headerTitle,
  onMarkerSelect,
}) => (
  <Layout>
    <Text category="h1">{headerTitle}</Text>
    {!dataArr[0]?.readings?.length ? (
      <EmptyChart />
    ) : (
      <Card style={{marginTop: 20}}>
        {!!chartFilters.length && (
          <Layout style={MetricsChartsStyles.filtersContainer}>
            <TabSelector
              items={chartFilters}
              selectedIndex={selectedFilter}
              onSelect={onChangeFilter}
              containerStyle={{padding: 0}}
              tabStyle={{height: 32}}
              textStyle={{fontSize: 16, lineHeight: 16}}
            />
          </Layout>
        )}
        <MetricsChartsSelect
          dataArr={dataArr}
          type={type}
          limitLines={limitLines}
          onMarkerSelect={onMarkerSelect}
        />
      </Card>
    )}
  </Layout>
);

MetricsChartsAll.defaultProps = {
  chartFilters: [],
};

export default MetricsChartsAll;
