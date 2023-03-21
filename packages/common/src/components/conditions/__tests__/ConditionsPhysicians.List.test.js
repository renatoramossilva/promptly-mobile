import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import ConditionsPhysiciansList from '../Conditions.Physicians.List';
import {conditions} from '../../../__mocks__/conditions';

jest.useFakeTimers();

describe('Test ConditionsPhysiciansList component', () => {
  it('Should render avatarDropdown', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConditionsPhysiciansList conditions={conditions} />
      </ApplicationProvider>,
    );
    const element = getByTestId('avatarDropdown');
    expect(element).toBeTruthy();
  });

  it('Should render statusbanner', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConditionsPhysiciansList conditions={[]} />
      </ApplicationProvider>,
    );
    const element = getByTestId('statusbanner');
    expect(element).toBeTruthy();
  });

  it('Should render disease name on description', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConditionsPhysiciansList conditions={conditions} />
      </ApplicationProvider>,
    );
    const element = getByTestId('avatarItemDescription');
    expect(element).toBeTruthy();
  });

  it('Should not render disease name on description', () => {
    conditions[0].diseaseName = undefined;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConditionsPhysiciansList conditions={conditions} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('avatarItemDescription');
    expect(element).toBe(null);
  });
});
