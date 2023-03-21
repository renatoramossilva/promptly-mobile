export const MetricsStyles = {
  container: {
    marginVertical: 30,
  },
  chartsContainer: {
    marginTop: 30,
    marginHorizontal: 15,
  },
};

export const MetricsResumeItemStyles = {
  card: {
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
  },
  readingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  reading: {
    fontSize: 32,
  },
  unit: {
    fontSize: 18,
    paddingLeft: 5,
    paddingBottom: 3,
  },
  label: {
    fontSize: 16,
  },
  waiting: {
    marginTop: 5,
    fontSize: 18,
  },
  containerRight: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderLeftWidth: 2,
    borderLeftColor: '#F5F6F7',
  },
  containerLeft: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: 'white',
    fontSize: 23,
  },
};

export const MetricsGlucoseTimelineStyles = {
  cardContainer: {
    width: '100%',
    padding: 0,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  valueWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    textAlign: 'center',
    backgroundColor: 'grey',
    color: 'white',
    minWidth: 90,
    alignItems: 'center',
  },
  value: {
    fontSize: 26,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 26,
    color: 'white',
  },
  unit: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 17,
    color: 'white',
  },
  dateContainer: {
    flex: 1,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateValue: {
    color: '#474F54',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 26,
  },
};

export const MetricsChartsStyles = {
  container: {
    marginTop: 10,
    left: -15,
  },
  title: {
    marginHorizontal: 15,
  },
  carouselContainer: {
    alignItems: 'center',
  },
  filtersContainer: {
    marginTop: 12,
    width: '50%',
  },
};

export const MetricsChartsItemStyles = {
  card: {
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
  },
};

export const MetricsGlucoseChartsItemResumeStyles = {
  container: {
    marginTop: 30,
  },
  group: {
    paddingBottom: 10,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
};

export const MetricsGlucoseChartsLegendModalStyles = {
  title: {
    fontSize: 18,
  },
  text: {
    fontSize: 16,
  },
  item: {
    marginTop: 10,
  },
};

export const MetricsResumeListStyles = {
  container: {
    left: -15,
  },
};

export const MetricsECGCardStyles = {
  circleSize: 10,
  header: {
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
};

export const MetricsECGPopUpStyles = {
  circleSize: 10,
  iconSize: 18,
  header: {paddingBottom: 20},
  headerTitle: {fontSize: 20, lineHeight: 30},
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  iconContainer: {width: 20},
};
