import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import TabSelector from '../TabSelector';
import {glucoseTabs} from '../../../constants/metrics';

jest.useFakeTimers();
const mockedOnPressFn = jest.fn();

describe('Test TabSelector component', () => {
  it('Should render correct amount of items with correct titles', () => {
    const {queryByTestId, getAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TabSelector
          items={glucoseTabs}
          selectedIndex={glucoseTabs[0].id}
          onSelect={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const itemsHolder = queryByTestId('TabSelector');
    expect(itemsHolder.props.children.length).toBe(2);

    const items = getAllByTestId('TabSelectorItemTitle');
    expect(items[0].props.children).toBe(glucoseTabs[0].title);
    expect(items[1].props.children).toBe(glucoseTabs[1].title);
  });

  it('Should render first item selected', () => {
    const {getAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TabSelector
          items={glucoseTabs}
          selectedIndex={glucoseTabs[0].id}
          onSelect={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );

    const items = getAllByTestId('TabSelectorItem');
    expect(items[0].props.style[1].backgroundColor).toBe('#1A34B8');
    expect(items[1].props.style[1].backgroundColor).toBe('#598BFF');
  });

  it('Should press second item and fire event once', () => {
    const {getAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TabSelector
          items={glucoseTabs}
          selectedIndex={glucoseTabs[0].id}
          onSelect={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );

    const items = getAllByTestId('TabSelectorItem');

    fireEvent.press(items[0]);
    expect(mockedOnPressFn).toHaveBeenCalledTimes(1);
  });
});
