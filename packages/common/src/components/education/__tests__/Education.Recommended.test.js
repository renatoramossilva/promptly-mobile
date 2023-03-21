import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import EducationRecommended from '../Education.Recommended';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

describe('Test EducationRecommended component', () => {
  const articles = [
    {
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
    },
  ];

  it('Should render component', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommended articles={articles} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('EducationRecommendedItem');
    expect(element).not.toBeNull();
  });

  it('Should NOT render component', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EducationRecommended articles={[]} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('EducationRecommendedItem');
    expect(element).toBeNull();
  });
});
