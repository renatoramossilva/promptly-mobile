import React from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {Image} from 'react-native';
import {MyAccountAboutStyles} from '../MyAccount.Styles';
import {getVersion} from 'react-native-device-info';
import {useTranslation} from 'react-i18next';

const About = () => {
  const {t} = useTranslation();

  return (
    <Layout style={{padding: 15, marginTop: 20}}>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Image
          source={require('../../../images/logo-blue.png')}
          style={MyAccountAboutStyles.logo}
        />
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Text category="h1" style={MyAccountAboutStyles.title}>
          Promptly software solution for health measures, Lda
        </Text>
        <Text style={MyAccountAboutStyles.text}>Rua das Condominhas, 15/29</Text>
        <Text style={MyAccountAboutStyles.text}>4150-222 Porto</Text>
        <Text style={MyAccountAboutStyles.text}>Portugal</Text>
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Image
          source={require('../../../images/ce.png')}
          style={MyAccountAboutStyles.ce}
        />
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Text category="h1" style={MyAccountAboutStyles.title}>
          {t('Software name')}
        </Text>
        <Text style={MyAccountAboutStyles.text}>Promptly health</Text>
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Text category="h1" style={MyAccountAboutStyles.title}>
          {t('Version')}
        </Text>
        <Text style={MyAccountAboutStyles.text}>{getVersion()}</Text>
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Text category="h1" style={MyAccountAboutStyles.title}>
          {t('Software release year')}
        </Text>
        <Text style={MyAccountAboutStyles.text}>2022</Text>
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Text category="h1" style={MyAccountAboutStyles.title}>
          {t('This app is intended for')}
        </Text>
        <Text style={MyAccountAboutStyles.text}>
          {t('Helping comunication between patients and care teams')}
        </Text>
      </Layout>
      <Layout style={MyAccountAboutStyles.textGroup}>
        <Text category="h1" style={MyAccountAboutStyles.title}>
          {t('Warning')}
        </Text>
        <Text style={MyAccountAboutStyles.text}>
          {t(
            'This app is not a diagnostic tool. You should always confirm your treatment with your care team.',
          )}
        </Text>
      </Layout>
    </Layout>
  );
};

export default About;
