export const DashboardStyles = {
  illustration: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    flexPosition: 'flex-start',
    alignSelf: 'flex-start',
  },
  listHolder: {
    marginTop: -80,
    backgroundColor: 'transparent',
    padding: 20,
  },
};

export const DashboardCoaCardStyles = {
  cardContainer: {
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    marginBottom: 10,
  },
};

export const DashboardCoaDetailsStyles = {
  listHolder: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  title: {
    fontSize: 24,
    color: '#24629e',
  },
};

export const DashboardCoaHistoryStyles = {
  itemContainer: {
    backgroundColor: 'transparent',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderColor: '#ebeced',
  },
  border: {
    borderTopWidth: 2,
  },
  itemScore: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 16,
  },
  score: {
    fontSize: 20,
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: 'bold',
  },
};

export const DashboardMetricsStyles = {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
  },
};

export const DashboardMetricsItemStyles = {
  outerContainer: {
    marginBottom: 10,
  },
  innerContainer: {
    borderRadius: 5,
    minHeight: 220,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  dataContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    flex: 1,
  },
  title: {
    color: 'white',
    lineHeight: 28,
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  },
  readingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  newReadingContainer: {
    width: '100%',
    bottom: 0,
    paddingRight: 0,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
  },
  newReadingLabel: {
    color: '#ffffff',
  },
  readingValue: {
    color: 'white',
    fontSize: 32,
    marginTop: 10,
  },
  readingUnitContainer: {
    justifyContent: 'flex-end',
    paddingLeft: 5,
    paddingBottom: 5,
    backgroundColor: 'transparent',
  },
  readingUnit: {
    color: 'white',
    fontSize: 15,
  },
  noData: {
    fontSize: 16,
    color: 'white',
  },
  icon: {
    color: 'white',
    marginRight: 10,
    fontSize: 17,
  },
};

export const DashboardMetricFormStyles = {
  formHolder: {
    padding: 15,
  },
  textLabel: {},
  subTextLabel: {
    color: 'grey',
    paddingBottom: 10,
  },
  title: {
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 0,
  },
  subTitle: {
    fontSize: 16,
    color: '#88949D',
  },
  fieldText: {
    fontSize: 16,
  },
  radioGroup: {
    marginBottom: 12,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
  radioContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    borderRightColor: '#f5f6f7',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    fontSize: 50,
  },
  textInputError: {
    borderColor: 'red',
  },
  separator: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  orSeparator: {
    marginLeft: 6,
    marginRight: 6,
    textAlign: 'center',
    fontSize: 16,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: '#88949D',
  },
  categorizeText: {
    fontSize: 16,
    textAlign: 'center',
  },
};
