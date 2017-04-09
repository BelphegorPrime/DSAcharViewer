import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewStyle, Picker, StatusBar} from 'react-native';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.charContainer}>
                <Text>{this.props.char["$"].name}</Text>
                {Object.keys(this.props.char["basis"][0]).map(key=>{
                        if(key === "geschlecht"){
                            return <Text key={Math.random()}>{"Geschlecht: "+this.props.char["basis"][0][key][0]["$"].name}</Text>
                        }else if(key === "rasse"){
                            return <Text key={Math.random()}>{"Rasse: "+this.props.char["basis"][0][key][0]["$"].string}</Text>
                        }
                        return <Text key={Math.random()}>{key}</Text>
                    })
                }
                {this.props.char["eigenschaften"][0]["eigenschaft"].map(propertie=>{
                    return <Text key={Math.random()}>{propertie["$"].name+": "+propertie["$"].value}</Text>
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
    },
});

export default connect((state) => ({
        json: state.mobile.json,
    }),
)(App);
