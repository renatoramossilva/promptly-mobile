import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import ConsentsForm from '../Consents.Form';
import {unagreedconsents} from '../../../__mocks__/consents';

jest.useFakeTimers();

const mockedSetCheckedConsent = jest.fn();
const mockedHandleConsentFormSubmit = jest.fn();

describe('Test ConsentsForm component', () => {
  it('Should NOT render form', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsForm
          checkedConsent={false}
          setCheckedConsent={mockedSetCheckedConsent}
          activeConsentIndex={0}
          handleConsentFormSubmit={mockedHandleConsentFormSubmit}
        />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ConsentsForm');
    expect(element).toBeFalsy();
  });
  it('Should render form', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsForm
          checkedConsent={false}
          setCheckedConsent={mockedSetCheckedConsent}
          consent={unagreedconsents[0]}
          activeConsentIndex={0}
          handleConsentFormSubmit={mockedHandleConsentFormSubmit}
        />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ConsentsForm');
    expect(element).toBeTruthy();
  });
  it('Should NOT call submit function', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsForm
          checkedConsent={false}
          setCheckedConsent={mockedSetCheckedConsent}
          consent={unagreedconsents[0]}
          activeConsentIndex={0}
          handleConsentFormSubmit={mockedHandleConsentFormSubmit}
        />
      </ApplicationProvider>,
    );
    const button = getByTestId('Button');
    fireEvent.press(button);
    expect(mockedHandleConsentFormSubmit).toHaveBeenCalledTimes(0);
  });
  it('Should call submit function', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsForm
          checkedConsent={true}
          setCheckedConsent={mockedSetCheckedConsent}
          consent={unagreedconsents[0]}
          activeConsentIndex={0}
          handleConsentFormSubmit={mockedHandleConsentFormSubmit}
        />
      </ApplicationProvider>,
    );
    const button = getByTestId('Button');
    fireEvent.press(button);
    expect(mockedHandleConsentFormSubmit).toHaveBeenCalledTimes(1);
  });
  it('Should call set check function', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ConsentsForm
          checkedConsent={true}
          setCheckedConsent={mockedSetCheckedConsent}
          consent={unagreedconsents[0]}
          activeConsentIndex={0}
          handleConsentFormSubmit={mockedHandleConsentFormSubmit}
        />
      </ApplicationProvider>,
    );
    const checkbox = getByTestId('Checkbox');
    fireEvent.press(checkbox);
    expect(mockedSetCheckedConsent).toHaveBeenCalledTimes(1);
  });
});
