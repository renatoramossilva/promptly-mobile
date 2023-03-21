import {isAndroid} from 'utils';

export const NotificationsStyles = {
  statusbanner: {
    paddingTop: 30,
    flex: 1,
  },
  notificationsListContainer: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
};
export const NotificationsItemStyles = {
  listItem: {
    marginBottom: 15,
    minHeight: 75,
    padding: 15,
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
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    lineHeight: 26,
  },
  date: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 5,
  },
};

export const NotificationHeaderStyles = {
  container: {
    justifyContent: 'center',
  },
};
