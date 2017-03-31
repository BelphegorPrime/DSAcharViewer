import React from 'react';
import { StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
    onCreate(props){

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
});

export default App