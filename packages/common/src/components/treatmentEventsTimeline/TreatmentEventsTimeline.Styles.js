import {Dimensions} from 'react-native';

export const TreatmentEventsTimelineStyles = {
  container: {
    marginBottom: 30,
  },
  header: {
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleContainer: {
    width: '42%',
    borderRadius: 2,
    padding: 5,
    height: 36,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    lineHeight: 24,
    fontSize: 16,
  },
};

export const TreatmentEventsTimelineItemStyles = {
  container: {
    width: Dimensions.get('window').width / 2 - 40,
    marginRight: 20,
    padding: 10,
    margin: 10,
    marginLeft: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  lateralityContainer: {
    top: 0,
    left: '25%',
    marginLeft: 10,
    marginTop: 60,
    marginBottom: 20,
  },
  leftContainer: {
    left: 0,
    marginLeft: 0,
    marginTop: 0,
  },
  rightContainer: {
    left: Dimensions.get('window').width / 2,
    marginLeft: 0,
    marginTop: 0,
  },
  triangle: {
    position: 'absolute',
    left: -8,
    top: '50%',
    marginTop: 5,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [{rotate: '-90deg'}],
  },
  lateralityTriangle: {
    top: -12,
    left: '50%',
    marginLeft: 5,
    transform: [{rotate: '0deg'}],
  },
  leftTriangle: {
    top: '50%',
    left: '100%',
    marginLeft: 19,
    transform: [{rotate: '90deg'}],
  },
  rightTriangle: {
    top: '50%',
    left: -8,
    marginLeft: 0,
    transform: [{rotate: '-90deg'}],
  },
  line: {
    top: 0,
    opacity: 0.2,
    width: 4,
    height: '100%',
    position: 'absolute',
    left: 12,
  },
  lineFirst: {
    top: '50%',
  },
  lineLast: {
    height: '50%',
  },
  lateralityLine: {
    left: '50%',
    marginLeft: -2,
  },
  lateralityLineLast: {
    height: 20,
  },
  iconContainer: {
    position: 'absolute',
    marginLeft: -5,
    width: 30,
    height: 30,
    top: '50%',
    left: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -16,
  },
  lateralityIconContainer: {
    left: '50%',
    marginLeft: -15,
    top: 30,
  },
  leftIconContainer: {
    top: '50%',
  },
  rightIconContainer: {
    top: '50%',
  },
  icon: {
    fontSize: 22,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    lineHeight: 26,
  },
  date: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
};
