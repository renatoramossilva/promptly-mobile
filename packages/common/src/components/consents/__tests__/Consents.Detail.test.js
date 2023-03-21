import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import ConsentsDetail from '../Consents.Detail';
import {unagreedconsents} from '../../../__mocks__/consents';

jest.useFakeTimers();

describe('Test ConsentsDetail component', () => {
  it('Should NOT render component', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsDetail />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ConsentsDetail');
    expect(element).toBeFalsy();
  });
  it('Should render component', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsDetail consent={unagreedconsents[0]} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ConsentsDetail');
    expect(element).toBeTruthy();
  });
});
