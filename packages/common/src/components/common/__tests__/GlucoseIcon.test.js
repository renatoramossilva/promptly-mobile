import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import GlucoseIcon from '../GlucoseIcon';
import {metrics} from '../../../__mocks__/metrics';

jest.useFakeTimers();

const data = {
  id: 16,
  category: '15074-8',
  slug: 'glucose',
  title: 'Glucose',
  description: 'Last reading',
  display: '{0}',
  reading: '130',
  unit: 'mg/dl',
  values: [130],
  readOnly: false,
  editableForm: {
    code: '15074-8',
    fields: [
      {
        code: '15074-8',
        widget: 'text',
        unit: 'mg/dl',
      },
    ],
    classifier: {
      icons: {
        'glucose-fasting': {
          icon: 'icon-no-apple',
          label: 'Fasting',
        },
        'glucose-pre-meal': {
          icon: 'icon-apple',
          label: 'Before meal',
        },
        'glucose-pos-meal': {
          icon: 'icon-half-apple',
          label: 'Post meal',
        },
      },
    },
  },
  icon: {
    class: 'icon-apple',
    label: 'Before meal',
  },
  classifier: {
    icons: {
      'glucose-fasting': {
        icon: 'icon-no-apple',
        label: 'Fasting',
      },
      'glucose-pre-meal': {
        icon: 'icon-apple',
        label: 'Before meal',
      },
      'glucose-pos-meal': {
        icon: 'icon-half-apple',
        label: 'Post meal',
      },
    },
  },
  code: '15074-8',
};

const data2 = {
  id: 16,
  category: '15074-8',
  slug: 'glucose',
  title: 'Glucose',
  description: 'Last reading',
  display: '{0}',
  reading: '130',
  unit: 'mg/dl',
  values: [130],
  readOnly: false,
  editableForm: {
    code: '15074-8',
    fields: [
      {
        code: '15074-8',
        widget: 'text',
        unit: 'mg/dl',
      },
    ],
    classifier: {
      icons: {
        'glucose-fasting': {
          icon: 'icon-no-apple',
          label: 'Fasting',
        },
        'glucose-pre-meal': {
          icon: 'icon-apple',
          label: 'Before meal',
        },
        'glucose-pos-meal': {
          icon: 'icon-half-apple',
          label: 'Post meal',
        },
      },
    },
  },
  icon: {
    class: 'icon-apple',
    label: 'Before meal',
  },
  classifier: {
    icons: {
      'glucose-fasting': {
        icon: 'icon-no-apple',
        label: 'Fasting',
      },
      'glucose-pre-meal': {
        icon: 'icon-apple',
        label: 'Before meal',
      },
      'glucose-pos-meal': {
        icon: 'icon-half-apple',
        label: 'Post meal',
      },
    },
  },
  code: 'glucose-pre-meal',
};

const mockedOnPressFn = jest.fn();

describe('Test GlucoseItem component', () => {
  it('Should render edit component', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <GlucoseIcon item={data} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('GlucoseIconEdit');
    expect(element).not.toBeNull();
    const noeditElement = queryByTestId('GlucoseIconNoEdit');
    expect(noeditElement).toBeNull();
  });

  it('Should NOT render edit component', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <GlucoseIcon item={data2} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('GlucoseIconEdit');
    expect(element).toBeNull();
    const noeditElement = queryByTestId('GlucoseIconNoEdit');
    expect(noeditElement).not.toBeNull();
  });

  it('Should call onpressfn once', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <GlucoseIcon item={data} onPressFn={mockedOnPressFn} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('GlucoseIconEdit');
    fireEvent.press(element);
    expect(mockedOnPressFn).toHaveBeenCalledTimes(1);
  });
});
