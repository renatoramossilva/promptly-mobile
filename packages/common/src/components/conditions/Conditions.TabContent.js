import React from 'react';
import ConditionsDiseaseDetail from './Conditions.Disease.Detail';
import ConditionsDiseaseOverview from './Conditions.Disease.Overview';
import ConditionsDiseaseClinicians from './Conditions.Disease.Clinicians';

const ConditionsTabContent = ({activeSection}) => {
  switch (activeSection) {
    case 1:
      return <ConditionsDiseaseDetail testID="diseaseDetail" />;
    case 2:
      return <ConditionsDiseaseClinicians testID="diseaseClinicians" />;
    default:
      return <ConditionsDiseaseOverview testID="diseaseOverview" />;
  }
};
export default ConditionsTabContent;
