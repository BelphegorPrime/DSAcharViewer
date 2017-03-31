import React from 'react';
import { Provider } from 'react-redux';

import createStore from './app/store'
import Application from './app/components/App';

const store = createStore()

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <Application />
            </Provider>
        );
    }
}

export default App