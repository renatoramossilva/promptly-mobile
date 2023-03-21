import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EducationRecommendedItem from '../Education.Recommended.Item';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

const mockedOnPressFn = jest.fn();

describe('Test EducationRecommendedItem component', () => {
  const article = {
    id: 175,
    url: '/artigos/o-que-e-retinopatia-diabetica/',
    headerImage:
      'https://cms.promptly.health/media/images/artigo-retinopatia-diabetica-o-que.2e16d0ba.fill-950x250.png',
    title: 'O que é a retinopatia diabética?',
    subtitle: '',
    description:
      'A retinopatia diabética é a principal causa de cegueira entre os 20 e os 64 anos. Se tem diabetes, é importante que adote estratégias para proteger os olhos.',
    author: {
      logo:
        'https://cms.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
      name: 'Written by CUF',
    },
    authors: [
      {
        name: 'CUF',
        avatar: {
          url:
            'https://cms.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
          width: 50,
          height: 50,
        },
      },
    ],
    disease_slug: 'type-2-diabetes',
  };

  it('Should render correct title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommendedItem
          article={article}
          handlePress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationRecommendedItemTitle');

    expect(element.props.children).toBe(article.title);
  });

  it('Should render correct description', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommendedItem
          article={article}
          handlePress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationRecommendedItemDescription');

    expect(element.props.children).toBe(article.description);
  });

  it('Should NOT render description', () => {
    article.description = undefined;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommendedItem
          article={article}
          handlePress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const element = queryByTestId('EducationRecommendedItemDescription');
    expect(element).toBeNull();
  });

  it('Should render correct image', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommendedItem
          article={article}
          handlePress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationRecommendedItemImage');

    expect(element.props.source.uri).toBe(article.headerImage);
  });

  it('Should NOT render image', () => {
    article.headerImage = undefined;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommendedItem
          article={article}
          handlePress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const element = queryByTestId('EducationRecommendedItemImage');
    expect(element).toBeNull();
  });

  it('Should run press function once', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommendedItem
          article={article}
          handlePress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );

    const element = getByTestId('EducationRecommendedItem');
    fireEvent.press(element);
    expect(mockedOnPressFn).toHaveBeenCalledTimes(1);
  });
});
