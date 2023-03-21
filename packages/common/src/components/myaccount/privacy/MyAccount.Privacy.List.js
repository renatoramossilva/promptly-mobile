import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Text} from '@ui-kitten/components';
import ClinicalTrialModel from 'models/ClinicalTrial';
import {MyAccountPrivacyListStyles} from '../MyAccount.Styles';
import MyAccountPrivacyItem from './MyAccount.Privacy.Item';

const MyAccountPrivacyList = ({
  clinicalTrials,
  t,
  handleClick,
  activeDropdown,
  handleSubmit,
  clickOpenItem,
}) =>
  clinicalTrials.map((group) => (
    <Layout key={group.category} testID="groupDisease">
      <Layout style={MyAccountPrivacyListStyles.contentHeader}>
        <Text style={MyAccountPrivacyListStyles.groupTitle} testID="itemTitle">
          {t(group.category)}
        </Text>
      </Layout>
      <Layout>
        {group.items.map((item) => {
          const itemData = new ClinicalTrialModel(item);
          return (
            <MyAccountPrivacyItem
              key={itemData.id}
              item={itemData}
              t={t}
              activeDropdown={activeDropdown}
              handleClick={handleClick}
              handleSubmit={handleSubmit}
              clickOpenItem={clickOpenItem}
            />
          );
        })}
      </Layout>
    </Layout>
  ));

MyAccountPrivacyList.propTypes = {
  clinicalTrials: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

export default MyAccountPrivacyList;
