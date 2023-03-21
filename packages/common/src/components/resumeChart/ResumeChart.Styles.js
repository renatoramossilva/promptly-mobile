export const ResumeChartStyles = {
  semiCircleContainer: {
    overflow: 'hidden',
    marginTop: 40,
  },
  semiCircle: {
    position: 'absolute',
    borderRadius: 500,
    borderColor: 'transparent',
    overflow: 'hidden',
    marginLeft: 15,
  },
  semiCircleCover: {
    position: 'relative',
    backgroundColor: 'white',
    top: 15,
    left: 15,
    borderRadius: 500,
    marginLeft: 15,
  },
  emoticon: {
    fontSize: 26,
    borderRadius: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    zIndex: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export const ResumeChartValueMarkerStyles = {
  container: {
    position: 'absolute',
    justifyContent: 'center',
    height: 50,
    left: 10,
    bottom: 5,
    zIndex: 30,
    elevation: 3000,
  },
};

export const ResumeChartLabelHolderStyles = {
  labelContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 15,
  },
  label: {flexDirection: 'row', alignItems: 'center'},
};

export const ResumeChartResultHolderStyles = {
  container: {
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  values: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 48,
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Regular',
  },
};

export const ResumeChartInvalidScoreStyles = {
  container: {padding: 15},
  image: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
};
