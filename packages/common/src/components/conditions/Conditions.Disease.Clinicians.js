import React from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ConditionsDiseaseDetailStyles} from './Conditions.Styles';
import {getDiseasePhysicianMembers} from 'selectors/selected_providers';
import {fetchEventsTimeline} from 'actions/diseases';
import {clickConditionDoctorsDropdown} from 'actions/datacollection';
import ConditionsPhysiciansList from './Conditions.Physicians.List';

const ConditionsDiseaseClinicians = ({
  physicians,
  onClickConditionDoctorsDropdown,
}) => {
  const {t} = useTranslation();

  let teamsOnly = physicians.filter(
    physician => physician.childrens.length > 0,
  );

  return (
    <Layout style={ConditionsDiseaseDetailStyles.container}>
      <Text category="h1" style={ConditionsDiseaseDetailStyles.title}>
        {t('Teams')}
      </Text>
      <ConditionsPhysiciansList
        conditions={teamsOnly}
        onClickAvatarDropdown={onClickConditionDoctorsDropdown}
      />
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  physicians: getDiseasePhysicianMembers,
});

const mapDispatchToProps = {
  fetchEventsTimeline,
  onClickConditionDoctorsDropdown: clickConditionDoctorsDropdown,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConditionsDiseaseClinicians);
