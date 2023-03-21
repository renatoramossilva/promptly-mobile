export const ConsentsStyles = {
  introContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  introText: {
    fontSize: 16,
  },
};

export const ConsentsMenuStyles = {
  container: {
    height: 60,
    marginBottom: 20,
  },
  menuStripe: {
    height: 4,
    width: '100%',
    position: 'absolute',
    zIndex: -10,
    top: 18,
    left: 10,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  itemContainer: {
    padding: 10,
    marginLeft: 10,
  },
  itemButton: {
    flexDirection: 'row',
  },
  itemNumberContainer: {
    width: 22,
    height: 22,
    alignItems: 'center',
    borderRadius: 2,
    marginRight: 5,
  },
  itemNumber: {
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
  },
  itemText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
};

export const ConsentsDetailStyles = {
  htmlUl: {
    paddingRight: 10,
    fontSize: 24,
    lineHeight: 24,
  },
  htmlContainer: {paddingHorizontal: 15},
  shadowContainer: {position: 'relative'},
  shadow: {
    height: 10,
    backgroundColor: 'transparent',
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    left: 15,
  },
};

export const htmlStyles = (theme, contentWidth) => {
  return {
    p: {
      color: theme['color-basic-300'],
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      lineHeight: 20,
      marginBottom: 15,
      fontWeight: 'bold',
    },
    ul: {
      color: theme['color-basic-500'],
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      lineHeight: 20,
      marginBottom: 5,
    },
    li: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      lineHeight: 20,
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
      fontFamily: 'SourceSansPro-Regular',
      color: theme['color-basic-900'],
      fontSize: 16,
      lineHeight: 18,
      marginBottom: 20,
      fontWeight: 'normal',
    },
    h3: {
      fontFamily: 'OpenSans-Regular',
      color: theme['color-basic-900'],
      fontSize: 30,
      lineHeight: 42,
      marginBottom: 30,
      fontWeight: 'normal',
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
    a: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
    },
  };
};

export const ConsentsFormStyles = {
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  checkbox: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    fontSize: 16,
  },
};
