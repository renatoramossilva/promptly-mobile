export const AvatarStyles = {
  holder: {
    marginBottom: 10,
  },
  childHolder: {
    paddingLeft: 12,
    borderLeftWidth: 4,
  },
  container: {
    backgroundColor: 'white',
    height: 58,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row',
    borderRadius: 2,
  },
  textContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    overflow: 'hidden',
    height: 25,
  },
  firstTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
  },
  secondTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
  },
  avatar: {
    height: 58,
    width: 58,
    borderRadius: 2,
  },
  textAvatar: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  dropIconContainer: {
    width: 20,
    justifyContent: 'center',
  },
  dropIcon: {
    color: '#000',
    fontSize: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'SourceSansPro-Regular',
  },
};
