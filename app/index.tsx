import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Comp} from './app';

const initialState = {
    data: 'some initial data'
};

ReactDOM.render(
    <Comp initialState={initialState} />,
    document.getElementById('comp-mountpoint')
); 