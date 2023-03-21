import React, {useState} from 'react';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import {clickMyAccountTab} from 'actions/datacollection';
import TopTab from 'components/common/TopTab';
import MyAccountTabContent from 'components/myaccount/MyAccount.TabContent';
import {MyAccountPrivacyStyles} from 'components/myaccount/MyAccount.Styles';
import {TAB_SECTIONS} from '../constants/myAccount';

const MyAccount = ({onClickMyAccountTab}) => {
  // initial state just until my account feature is finished.
  const [activeSection, setActiveSection] = useState(0);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'android' ? undefined : 'padding'}>
      <Layout style={MyAccountPrivacyStyles.container}>
        <TopTab
          items={TAB_SECTIONS}
          selectedIndex={activeSection}
          onSelect={index => {
            onClickMyAccountTab({
              name: TAB_SECTIONS[index]?.title,
            });
            setActiveSection(index);
          }}
        />
        <ScrollView>
          <MyAccountTabContent
            activeSection={TAB_SECTIONS[activeSection].key}
          />
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const mapDispatchToProps = {
  onClickMyAccountTab: clickMyAccountTab,
};

export default connect(null, mapDispatchToProps)(MyAccount);
