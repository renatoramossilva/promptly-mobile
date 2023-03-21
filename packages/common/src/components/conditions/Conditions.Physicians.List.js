import React from 'react';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import AvatarDropdown from '../common/AvatarDropdown';
import StatusBanner from '../common/StatusBanner';

const ConditionsPhysiciansList = ({conditions, onClickAvatarDropdown}) => {
  const {t} = useTranslation();
  const hasPhysicians = (items = []) => items.length > 0;

  return (
    <Layout>
      {hasPhysicians(conditions) ? (
        conditions.map(item => (
          <AvatarDropdown
            key={item.name}
            onClickAction={onClickAvatarDropdown}
            item={{
              ...item,
              description: item.diseaseName
                ? t('{{d}} team', {d: item.diseaseName})
                : '',
            }}
          />
        ))
      ) : (
        <StatusBanner
          status={{
            image: require('../../images/bg-empty-physicians.png'),
            subtitle: t('Add your first clinician to follow this condition'),
          }}
        />
      )}
    </Layout>
  );
};

ConditionsPhysiciansList.defaultProps = {
  conditions: [],
  onClickAvatarDropdown: () => [],
};

ConditionsPhysiciansList.propTypes = {
  conditions: PropTypes.array.isRequired,
  onClickAvatarDropdown: PropTypes.func,
};

export default ConditionsPhysiciansList;
