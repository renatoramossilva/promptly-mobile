class Article {
  constructor(data, t) {
    this.id = data.id;
    this.url = data.url;
    this.headerImage = data.header_image_thumbnail?.url;
    this.image = data.article_image_thumbnail?.url;
    this.previewImage = data.article_image_150x150
      ? data.article_image_150x150.url
      : undefined;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.description = data.introduction;
    this.author = {
      logo: data.authors[0].avatar.url,
      name: `${t('Written by')} ${data.authors[0].name}`,
    };
    this.body = data.body;
    this.authors = data.authors;
    this.quick_reference = data.quick_reference;
    this.disease_slug = data.disease?.slug;
  }

  static defaultFilters =
    '&fields=slug,url,title,subtitle,introduction,article_image_thumbnail,authors,article_image_width_150x150,article_image_max_150x150,article_image_150x150';
}

export default Article;
