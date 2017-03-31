import React from 'react';
import { StyleSheet, Text, View, ViewStyle, Picker, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.charContainer}>
                <Text>{this.props.char["$"].name}</Text>
                {Object.keys(this.props.char["basis"][0]).map(key=>{
                        if(key === "geschlecht"){
                            return <Text>{"Geschlecht: "+this.props.char["basis"][0][key][0]["$"].name}</Text>
                        }else if(key === "rasse"){
                            return <Text>{"Rasse: "+this.props.char["basis"][0][key][0]["$"].string}</Text>
                        }
                        return <Text>{key}</Text>
                    })
                }
                {this.props.char["eigenschaften"][0]["eigenschaft"].map(propertie=>{
                    return <Text>{propertie["$"].name+": "+propertie["$"].value}</Text>
                })

                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    charContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    } as ViewStyle,
});

export default connect((state) => ({
        json: state.mobile.json,
    }),
)(App);
