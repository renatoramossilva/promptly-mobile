import React, {useState, useEffect} from 'react';
import {useWindowDimensions, ScrollView} from 'react-native';
import Axios from 'utils/axios';
import {useTranslation} from 'react-i18next';
import {Input, Text, Layout} from '@ui-kitten/components';
import {getImageAbsoluteUrl} from 'utils';
import {PROVIDER_CONNECTED_SUCCESS} from '../../constants/messages';
import {
  DEVICES_IMAGE_MARGIN,
  DEVICES_IMAGE_RATIO,
} from '../../constants/devices';
import StatusBanner from '../common/StatusBanner';
import Button from '../common/Button';
import {NavigatorStyles} from '../../navigation/Navigator.Styles';
import {ProviderFormStyles} from './Devices.Styles';

const ProviderForm = props => {
  const {t} = useTranslation();
  const {item} = props.route.params;
  const {steps} = item;
  const {width} = useWindowDimensions();
  const [identifierID, setIdentifierID] = useState('');
  const [errors, setErrors] = useState({});
  useEffect(() => {
    props.navigation.setOptions({
      title: <Text style={NavigatorStyles.title}>{item.name}</Text>,
    });
  }, []);

  const isFormValid = () => identifierID !== '' && identifierID.length > 2;

  const getError = field => {
    const error = errors[field];
    return error || undefined;
  };

  const connect = () => {
    const {url} = item;

    if (isFormValid()) {
      Axios.post(url, {identifier: identifierID})
        .then(() => {
          setIdentifierID('');
          props.navigation.navigate('Devices', {
            reload: true,
            toast: PROVIDER_CONNECTED_SUCCESS,
          });
        })
        .catch(request => {
          if (request.response.status === 400) {
            setErrors(request.response.data);
          }
        });
    } else {
      setErrors({uid: t('Empty value is not valid')});
    }
  };

  const status = {
    image: steps.intro?.img_url
      ? {uri: getImageAbsoluteUrl(steps.intro.img_url)}
      : undefined,
    title: t('Device {{idName}}', {
      idName: item.identifierName,
    }),
    subtitle: steps.intro?.subtitle
      ? steps.intro.subtitle
      : t('{{idName}} number is on a label below the device', {
          idName: item.identifierName,
        }),
  };

  return (
    <ScrollView>
      <Layout style={ProviderFormStyles.container}>
        <StatusBanner
          status={status}
          innerStyles={{
            image: {
              width: width - DEVICES_IMAGE_MARGIN,
              height: (width - DEVICES_IMAGE_MARGIN) / DEVICES_IMAGE_RATIO,
              resizeMode: 'contain',
            },
          }}
        />
        <Input
          onChangeText={text => {
            setIdentifierID(text);
            setErrors({});
          }}
          value={identifierID}
          placeholder={item.identifierName}
          status="basic"
          style={ProviderFormStyles.input}
        />
        <Button
          accessibilityLabel={t('Add device')}
          onPress={() => connect()}
          status="primary"
          style={ProviderFormStyles.button}>
          {t('Add device')}
        </Button>
        {getError('uid') && (
          <Text status="danger" style={ProviderFormStyles.errorText}>
            {getError('uid')}
          </Text>
        )}
      </Layout>
    </ScrollView>
  );
};

export default ProviderForm;
