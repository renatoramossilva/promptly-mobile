/**
 * @format
 */

import 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';
import Webviewer from '../../src/components/webviewer/Webviewer';

describe('rendering webviewer', () => {
    test('renders webviewer', () => {
        const {getByTestId} = render(<Webviewer />);
        const element = getByTestId('main-webview');
        expect(element).toBeTruthy();
    });

    test('webviewer calls correct url', () => {
        const props = {
            url: 'http://dev.localhost:8000',
            deviceId: '6f85e398-047a-4ab5-a3fc-4dd7d362ab8e',
        };
        const {getByTestId} = render(
            <Webviewer url={props.url} deviceId={props.deviceId} />,
        );
        const element = getByTestId('main-webview');

        expect(element.props.source.uri).toBe(
            `${props.url}?device_uid=${props.deviceId}`,
            );
    });

    test('webviewer calls correct uri', () => {
        const props = {
            url: 'promptly://pdisease/1/education',
            deviceId: '6f85e398-047a-4ab5-a3fc-4dd7d362ab8e',
        };
        const {getByTestId} = render(
            <Webviewer url={props.url} deviceId={props.deviceId} />,
        );
        const element = getByTestId('main-webview');

        expect(element.props.source.uri).toBe(
            `https://dev.localhost:8000/app/notification?uri=${props.url}&device_uid=${props.deviceId}`,
        );
    });
});
