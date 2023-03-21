import {Beacon} from 'react-native-help-scout';

class HelpScout {
  static init = (mapping, institution, role) => {
    let selectedBeacon = mapping.promptly[role];

    if (mapping[institution]) {
      selectedBeacon = mapping[institution][role];
    }

    Beacon.init(selectedBeacon);
  };

  static process = ({func, url, email, newEmail}) => {
    if (url === '' || !url || email === newEmail) {
      return;
    }
    func(url, {email: newEmail});
  };

  static identify = ({user, role, institution, signatures}) => {
    let signature;

    if (Object.keys(signatures).length) {
      signature = signatures[institution]
        ? signatures[institution][role]
        : signatures.promptly[role];
    }

    const data = {
      name: user.privateData.name,
      ...(user.email && {email: user.email}),
      phone: user.phone || '',
      avatar: user.privateData.avatar_url,
      ...(signature && {signature}),
    };

    Beacon.identify(data);
  };

  static open = () => {
    Beacon.open();
  };

  static logout = () => {
    Beacon.logout({endActiveChat: true});
  };
}

export default HelpScout;
