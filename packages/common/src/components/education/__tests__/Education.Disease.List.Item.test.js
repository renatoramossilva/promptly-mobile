import React from 'react';
import {render} from '@testing-library/react-native';
import EducationDiseaseListItem from '../Education.Disease.List.Item';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

describe('Test EducationDiseaseListItem component', () => {
  const article = {
    id: 166,
    url: '/artigos/alimentacao-para-diabeticos/',
    image:
      'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.2e16d0ba.fill-280x150.png',
    previewImage:
      'https://cms.labs.promptly.health/media/images/artigo-diabeticos-alimentacao.2e16d0ba.fill-150x150.png',
    title: 'Alimentação para diabéticos',
    subtitle: '',
    description:
      'Conheça algumas das regras básicas de uma alimentação para diabéticos e não só.',
    author: {
      logo:
        'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
      name: 'Written by CUF',
    },
  };

  it('Should render correct title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationDiseaseListItem article={article} />
      </ApplicationProvider>,
    );
    const element = getByTestId('title');

    expect(element.props.children).toBe(article.title);
  });

  it('Should render correct description', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationDiseaseListItem article={article} />
      </ApplicationProvider>,
    );
    const element = getByTestId('description');

    expect(element.props.children).toBe(article.description);
  });

  it('Should render correct image', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationDiseaseListItem article={article} />
      </ApplicationProvider>,
    );
    const element = getByTestId('image');

    expect(element.props.source.uri).toBe(article.image);
  });
});
