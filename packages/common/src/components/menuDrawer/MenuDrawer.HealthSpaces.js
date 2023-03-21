import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import HealthSpacesItem from './MenuDrawer.HealthSpaces.Item';
import {HealthSpacesStyles} from './MenuDrawer.Styles';

const MenuDrawerHealthSpaces = ({
  setInstitutionPatient,
  selectedInstitution,
  institutions,
}) => {
  const {t} = useTranslation();

  return (
    <Layout style={HealthSpacesStyles.wrapper}>
      <Text category="h4" style={HealthSpacesStyles.title}>
        {t('Health spaces')}
      </Text>
      {institutions.map((inst) => (
        <HealthSpacesItem
          handleClick={() => setInstitutionPatient(inst.id)}
          selectedInstitution={selectedInstitution}
          key={inst.id}
          inst={inst}
        />
      ))}
    </Layout>
  );
};

export default MenuDrawerHealthSpaces;
