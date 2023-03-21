import React from 'react';
import {View} from 'react-native';
import {DashboardStyles} from './Dashboard.Styles';
import DashboardCoaCard from './Dashboard.CoaCard';

const DashboardCoaCardList = ({diseases, onClickCoaDetail}) => {
  return (
    <View style={DashboardStyles.listHolder} testID="dashboardCoaCardList">
      {diseases.map(disease => (
        <DashboardCoaCard
          pdisease={disease}
          key={disease.id}
          onClickCoaDetail={onClickCoaDetail}
        />
      ))}
    </View>
  );
};

export default DashboardCoaCardList;
