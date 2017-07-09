import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewStyle, Picker } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/index';
import Chardata from './Chardata'

class App extends Component {
    constructor(props){
        super(props)
        props.actions.getJson()
    }

    render() {
        if(this.props.json[0] !== undefined){
            return <View style={styles.container}>
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
        }else {
            return(
                <View style={styles.container_loading}>
                    <Text>App is loading</Text>
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
    },
    container_loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    picker: {
        height: 50,
        flex:1,
    },
    pickerContainer:{
        flexDirection:'row',
    },
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
