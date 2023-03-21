import Config from 'react-native-config';

export const buildURLfromURI = (uri, category, diseases = [], navigation) => {
  if (typeof uri === 'string') {
    const [source, action] = uri.split('://');
    if (action && source && source === Config.APP_SCHEMA) {
      const urlSplited = action.split('/');
      const urlDisease = this.props.diseases.find((d) => d.id == urlSplited[1]);
      this.props.navigation.navigate(category, {
        id: urlSplited[3],
        url: urlDisease?.education_urls?.article_endpoint,
      });
    }
  }
};
