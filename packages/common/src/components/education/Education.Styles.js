export const EducationStyles = {
  noDiseasesBanner: {
    backgroundColor: '#EEF6FF',
    flex: 1,
  },
  noDiseasestextContainer: {
    marginTop: -30,
  },
  noDiseasestitle: {
    fontSize: 22,
    paddingBottom: 0,
  },
  noDiseasessubtitle: {
    fontSize: 18,
  },
  illustration: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 280,
    flexPosition: 'flex-start',
    alignSelf: 'flex-start',
  },
  listHolder: {
    marginTop: -130,
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'left',
    marginTop: 10,
  },
  statusBanner: {
    paddingHorizontal: 0,
  },
};

export const EducationListPreviewStyles = {
  diseaseButton: {
    flex: 1,
    marginBottom: 30,
  },
  noResultsBanner: {
    paddingTop: 30,
  },
  container: {
    backgroundColor: 'transparent',
  },
  title: {
    marginBottom: 20,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
  },
};

export const EducationPreviewItemStyles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 110,
    marginBottom: 20,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 110,
    height: 110,
  },
  textContainer: {
    flex: 1,
    margin: 12,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    marginBottom: 10,
    lineHeight: 24,
  },
  description: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Regular',
    lineHeight: 26,
  },
};

export const EducationDiseaseListItemStyles = {
  container: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    marginBottom: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    height: 180,
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    lineHeight: 30,
  },
  description: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    marginTop: 5,
    lineHeight: 26,
  },
  author: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    height: 14,
    width: 14,
    marginRight: 5,
  },
  name: {
    fontSize: 12,
    lineHeight: 17,
  },
};

export const EducationDiseaseListStyles = {
  list: {
    backgroundColor: '#F5F6F7',
  },
  container: {
    paddingTop: 30,
  },
  noDiseasesBanner: {
    backgroundColor: '#EEF6FF',
    flex: 1,
  },
};

export const EducationItemStyles = {
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 250,
  },
  image: {
    height: '100%',
  },
  headerGradientContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerTextContainer: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    position: 'absolute',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
    color: 'white',
    flex: 1,
  },
  author: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  logo: {
    height: 14,
    width: 14,
    marginRight: 5,
  },
  name: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 12,
    lineHeight: 17,
    color: 'white',
  },
  htmlContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  htmlUl: {
    paddingRight: 10,
    fontSize: 24,
    lineHeight: 24,
  },
};

export const EducationRecommendedStyles = {
  container: {
    paddingVertical: 15,
  },
  title: {
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
};

export const EducationRecommendedItemStyles = {
  container: {
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
    margin: 10,
  },
  description: {
    height: 45,
    color: 'white',
    fontSize: 18,
  },
};

export const htmlStyles = (theme, contentWidth) => {
  return {
    p: {
      color: theme['color-basic-300'],
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 18,
      lineHeight: 26,
      marginBottom: 5,
    },
    ul: {
      color: theme['color-basic-300'],
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      lineHeight: 20,
      marginBottom: 5,
    },
    b: {
      fontFamily: 'OpenSans-Regular',
      color: theme['color-basic-900'],
      fontSize: 20,
      lineHeight: 28,
    },
    h1: {
      fontFamily: 'OpenSans-Regular',
      color: theme['color-basic-900'],
      fontSize: 25,
      lineHeight: 35,
      marginVertical: 20,
    },
    h2: {
      fontFamily: 'OpenSans-Regular',
      color: theme['color-basic-900'],
      fontSize: 25,
      lineHeight: 35,
      marginVertical: 20,
    },
    h3: {
      fontFamily: 'OpenSans-Regular',
      color: theme['color-basic-900'],
      fontSize: 20,
      lineHeight: 30,
      marginVertical: 20,
    },
    h4: {
      fontFamily: 'OpenSans-Regular',
      color: theme['color-basic-900'],
      fontSize: 20,
      lineHeight: 30,
      marginVertical: 20,
    },
    div: {
      margin: 0,
    },
    iframe: {
      maxWidth: '100%',
    },
    img: {
      maxWidth: contentWidth,
      marginHorizontal: 20,
      height: '100%',
    },
  };
};
