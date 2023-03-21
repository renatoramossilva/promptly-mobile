import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import ConditionsPhysicians from '../Conditions.Physicians';
import {conditions} from '../../../__mocks__/conditions';

jest.useFakeTimers();

const physiciansTeam = conditions[0].childrens;

describe('Test ConditionsPhysicians component', () => {
  it('Should render disease', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConditionsPhysicians items={physiciansTeam} />
      </ApplicationProvider>,
    );
    const element = getByTestId('shortName');

    expect(element.props.children).toBe(physiciansTeam[0].shortName);
  });
});
