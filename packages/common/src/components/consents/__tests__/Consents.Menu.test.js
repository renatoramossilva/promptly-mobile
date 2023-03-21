import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {unagreedconsents} from '../../../__mocks__/consents';
import ConsentsMenu from '../Consents.Menu';

jest.useFakeTimers();

const mockedSelectConsent = jest.fn();

describe('Test ConsentsMenu component', () => {
  it('Should NOT render form', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsMenu
          selectConsent={mockedSelectConsent}
          activeConsentIndex={1}
        />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ConsentsMenu');
    expect(element).toBeFalsy();
  });
  it('Should render form', () => {
    const {queryByTestId, queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsMenu
          unagreedClinicalTrials={unagreedconsents}
          selectConsent={mockedSelectConsent}
          activeConsentIndex={1}
        />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ConsentsMenu');
    expect(element).toBeTruthy();
    const items = queryAllByTestId('ConsentsMenuItem');
    expect(items.length).toBe(2);
  });
  it('Should call select function', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsMenu
          unagreedClinicalTrials={unagreedconsents}
          selectConsent={mockedSelectConsent}
          activeConsentIndex={1}
        />
      </ApplicationProvider>,
    );
    expect(mockedSelectConsent).toHaveBeenCalledTimes(0);
    const items = queryAllByTestId('ConsentsMenuItem');
    const button = items[1];
    fireEvent.press(button);
    expect(mockedSelectConsent).toHaveBeenCalledTimes(1);
  });
  it('Should render correct number of titles', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsMenu
          unagreedClinicalTrials={unagreedconsents}
          selectConsent={mockedSelectConsent}
          activeConsentIndex={1}
        />
      </ApplicationProvider>,
    );
    const items = queryAllByTestId('ConsentsMenuItemTitle');
    expect(items.length).toBe(1);
    const title = items[0];
    expect(title.props.children).toBe('Consent 2');
  });
});
