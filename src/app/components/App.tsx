import React from 'react';
import { StyleSheet, Text, View, ViewStyle} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/index';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
    constructor(props){
        super(props)
        props.actions.getJson()
    }

    render() {
        if(this.props.json[0] !== undefined){
            console.log(this.props.json[0]["$"].name)
            return (
                <View style={styles.container}>
                    <Text>{this.props.json[0]["$"].name}</Text>
                </View>
            );
        }else {
            return(
                <View style={styles.container}>
                    <Text>Open up App.tsx to start workingn your app!</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>
                </View>
            )
        }
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

export default connect((state) => ({
        json: state.mobile.json,
    }),
    (dispatch) => ({
        actions: bindActionCreators(allActions, dispatch)
    })
)(App);
