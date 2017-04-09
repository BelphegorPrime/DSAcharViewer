import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './app/store'
import Application from './app/components/App';

const store = createStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Application />
            </Provider>
        );
    }
}

export default App