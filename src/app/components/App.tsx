import React from 'react';
import { StyleSheet, Text, View, ViewStyle, Picker, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/index';
import Chardata from './Chardata'

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
            return (
                <View style={styles.container}>
                    <View  style={styles.pickerContainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.props.chosenCharIndex}
                            onValueChange={(charIndex) => this.props.actions.setPicker(charIndex)}>
                            {this.props.json.map((charjson, index) =>{
                                    return <Picker.Item key={Math.random()} label={charjson["$"].name}  value={index} />
                                })
                            }
                        </Picker>
                    </View>
                    <Chardata char={this.props.chosenChar} actions={this.props.actions}/>
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 20,
    } as ViewStyle,
    picker: {
        height: 50,
        flex:1,
    } as ViewStyle,
    pickerContainer:{
        flexDirection:'row',
    } as ViewStyle,
});

export default connect((state) => ({
        json: state.mobile.json,
        chosenChar: state.mobile.chosenChar,
        chosenCharIndex: state.mobile.chosenCharIndex,
    }),
    (dispatch) => ({
        actions: bindActionCreators(allActions, dispatch)
    })
)(App);
