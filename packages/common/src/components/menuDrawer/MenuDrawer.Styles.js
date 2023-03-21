export const MenuDrawerStyles = {
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
};
export const MenuDrawerNavStyles = {
  wrapper: {
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
};

export const MenuDrawerNavItemStyles = {
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
    fontSize: 21,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    lineHeight: 22,
    fontSize: 18,
    fontWeight: '600',
  },
};

export const MenuDrawerLogoStyles = {
  wrapper: {
    flexDirection: 'column',
    padding: 15,
    alignItems: 'flex-start',
    height: 56,
  },
  logo: {
    height: 25,
    width: 198,
  },
};

export const HealthSpacesStyles = {
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    marginBottom: 20,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 28,
  },
};

export const HealthSpacesItemStyles = {
  button: {
    marginBottom: 15,
    height: 60,
    borderRadius: 2,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    borderRadius: 2,
    height: 60,
    width: 60,
  },
  textWrapper: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingVertical: 10,
    paddingRight: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    lineHeight: 24,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
    lineHeight: 20,
  },
  selectedWrapper: {
    paddingRight: 10,
    width: 35,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIconWrapper: {
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIcon: {
    fontSize: 16,
    color: 'white',
  },
};

export const MenuDrawerUserStyles = {
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#F5F6F7',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 60,
    width: 60,
    marginRight: 15,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    lineHeight: 30,
  },
  contact: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    lineHeight: 22,
  },
};
