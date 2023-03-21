import React, {PureComponent} from 'react';
import {withTranslation} from 'react-i18next';
import {Layout} from '@ui-kitten/components';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {getPatient} from 'selectors/selected_patients';
import {fetchDiseaseScores} from 'actions/diseases';
import {clickConditionDetail} from 'actions/datacollection';
import StatusBanner from 'components/common/StatusBanner';
import ConditionsDiseaseReview from 'components/conditions/Conditions.Disease.Review';
import {ConditionsStyles} from 'components/conditions/Conditions.Styles';

class Conditions extends PureComponent {
  constructor(props) {
    super(props);
  }

  getDiseaseScores = () => {
    const {patient, diseases} = this.props;
    diseases.map(pdisease => {
      this.props.fetchDiseaseScores(patient, pdisease, 'SINGLE_SCORE');
    });
  };

  componentDidMount() {
    const {navigation} = this.props;

    this._unsubscribe = navigation.addListener('focus', () => {
      this.getDiseaseScores();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {t, diseases, patient} = this.props;

    const illustration = {
      image: require('../images/conditions.png'),
      title: t('Monitor your health'),
      subtitle: t('Medical conditions in detail.'),
    };

    return (
      <Layout style={{flex: 1}}>
        <ScrollView>
          <StatusBanner
            status={illustration}
            innerStyles={{
              textContainer: ConditionsStyles.illustration,
              title: ConditionsStyles.title,
              subtitle: ConditionsStyles.subTitle,
            }}
          />
          <View style={ConditionsStyles.listHolder}>
            {diseases.map(disease => (
              <ConditionsDiseaseReview
                key={disease.id}
                pdisease={disease}
                patient={patient}
                onClickConditionDetail={this.props.onClickConditionDetail}
              />
            ))}
          </View>
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  diseases: getDiseaseItems,
});

const mapDispatchToProps = {
  fetchDiseaseScores,
  onClickConditionDetail: clickConditionDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Conditions));
