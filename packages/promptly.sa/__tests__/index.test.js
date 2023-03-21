/**
 * @format
 */

import 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

jest.mock('../__mocks__/react-native-bootsplash');

describe('rendering app', () => {
    test('renders app', () => {
        const {getByTestId} = render(<App />);
        const element = getByTestId('main-container');
        expect(element).toBeTruthy();
    });
});
