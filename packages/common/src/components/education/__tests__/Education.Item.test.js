import React from 'react';
import {render} from '@testing-library/react-native';
import EducationItem from '../Education.Item';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

light['promptly-blue-500'] = '#0E416C';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key}),
}));

describe('Test EducationItem component', () => {
  const article = {
    id: 156,
    url: '/artigos/diabetes-ocular/',
    headerImage:
      'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.2e16d0ba.fill-950x250.png',
    image:
      'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.2e16d0ba.fill-280x150.png',
    previewImage:
      'https://cms.labs.promptly.health/media/images/doenca-diabetes-ocular.2e16d0ba.fill-150x150.png',
    title: 'Diabetes ocular',
    subtitle: '',
    description:
      'A diabetes ocular é um grupo de problemas oculares que acontece em pessoas com Diabetes Mellitus. Este grupo de doenças pode, em última fase, causar perda visual significativa ou mesmo nos casos mais graves levar a cegueira.',
    author: {
      logo:
        'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
      name: 'Written by CUF',
    },
    body:
      '<div class="block-paragraph_block"><div class="rich-text"><h3>O que é </h3><p>A diabetes ocular é um grupo de problemas oculares que acontece em pessoas com Diabetes Mellitus. Este grupo de doenças pode, em última fase, causar perda visual significativa ou mesmo nos casos mais graves levar a cegueira. </p><p>A forma mais comum de apresentação é a retinopatia diabética (RD), mas esta doença pode estar associada a outras alterações, como catarata ou glaucoma. </p><h3>O que é a retinopatia diabética? </h3><p>A retina é um tecido localizado no interior e na parte posterior do olho e é necessária para uma boa visão. Qualquer doença que atinja a retina é designada retinoptia.  </p><p>A RD é a principal causa de cegueira e dá mais frequentemente alterações dos vasos sanguíneos, em diferentes estadios e de forma muito semelhante nos 2 olhos. Inicia-se com distúrbios visuais que agravam com o tempo e levam a perda da visão. </p><h3>Quais são os estadios da Retinopatia Diabética? </h3><p>A RD tem 4 estadios: ligeira, moderada, grave e proliferativa.  </p><p>As RD ligeira, moderada e grave manifestam-se por alterações oclusivas nos vasos sanguíneos cada vez mais graves e com fluxo sanguíneo retiniano cada vez mais diminuído.  </p><p>No último estadio - RD proliferativa - a retina desenvolve novos vasos sanguíneos (neovascularização) de forma a compensar a oclusão e a redução do fluxo de sangue. Porém, esta neovascularização não tem uma estrutura normal, tem maior fragilidade e é responsável pelas complicações. </p><h3>Causas </h3><p>O principal fator de risco para desenvolver RD é a Diabetes Mellitus (DM tipo 1 e 2). O risco também aumenta com a duração desde do diagnóstico de DM. Assim, todos os doentes com DM devem fazer rastreio anual até porque nas fases iniciais da doença pode não dar queixas. </p><h3>Tratamento </h3><p>Para prevenir o agravamento da RD deve ser feito o controlo sistémico da glicemia, pressão arterial e dislipidemia.  </p><p>Nos 3 primeiros estadios da RD não é necessário tratamento ocular com excepção dos casos acompanhados de edema macular. Neste último caso são necessárias injecções oculares (intra-vítreas). </p><p>Nos casos mais graves, RD proliferativa, as opções dependem da apresentação e são: LASER, cirurgia (vitrectomia) e injecções intra-vítreas </p><h3>Prevenção </h3><p>O controlo da glicémia permite atrasar o início da RD, o seu agravamento e a necessidade dos tratamentos LASER. O controlo da pressão arterial e da dislipidémia pode também reduzir o risco da perda de visão. </p><p>Se tem DM sem retinopatia certifique-se que faz uma consulta anual com dilatação.  </p><p>No caso de ter RD deve fazer exame oftalmológico mais frequente. </p></div></div>',
    authors: [
      {
        name: 'CUF',
        avatar: {
          url:
            'https://cms.labs.promptly.health/media/images/Screenshot_2020-03-11_at_14.49.50.2e16d0ba.fill-50x50.png',
          width: 50,
          height: 50,
        },
      },
    ],
    quick_reference: [
      {
        type: 'body',
        value:
          '<p><b>Causas</b> </p><p>O principal fator de risco para desenvolver RD é a Diabetes Mellitus (DM tipo 1 e 2). O risco também aumenta com a duração desde do diagnóstico de DM. Assim, todos os doentes com DM devem fazer rastreio anual até porque nas fases iniciais da doença pode não dar queixas. </p><p><b>Tratamento </b></p><p>Para prevenir o agravamento da RD deve ser feito o controlo sistémico da glicemia, pressão arterial e dislipidemia.  </p><p>Nos 3 primeiros estadios da RD não é necessário tratamento ocular com excepção dos casos acompanhados de edema macular. Neste último caso são necessárias injecções oculares (intra-vítreas). </p><p>Nos casos mais graves, RD proliferativa, as opções dependem da apresentação e são: LASER, cirurgia (vitrectomia) e injecções intra-vítreas </p><p></p>',
        id: '6dbd00e0-234d-4e04-a93a-4be4d8972eb0',
      },
    ],
  };

  it('Should render correct title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <EducationItem article={article} />
        </Provider>
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationItemTitle');

    expect(element.props.children).toBe(article.title);
  });

  it('Should render correct description', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <EducationItem article={article} />
        </Provider>
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationItemDescription');

    expect(element).not.toBeNull();
  });

  it('Should render correct image', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <EducationItem article={article} />
        </Provider>
      </ApplicationProvider>,
    );
    const element = getByTestId('EducationItemImage');

    expect(element.props.source.uri).toBe(article.headerImage);
  });
});
