import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class CharBasics extends Component {
    render() {
        return <View>
                    {/**Char Name*/}
                    <Text>{this.props.char["$"].name}</Text>
                    {/**Char Basic*/}
                    {Object.keys(this.props.char["basis"][0]).map(key=>{
                            if(key === "geschlecht"){
                                return <Text key={Math.random()}>{"Geschlecht: "+this.props.char["basis"][0][key][0]["$"].name}</Text>
                            }else if(key === "rasse"){
                                return <Text key={Math.random()}>{"Rasse: "+this.props.char["basis"][0][key][0]["$"].string}</Text>
                            }
                            return <Text key={Math.random()}>{key}</Text>
                        })
                    }
                    <View style={{height: 40}}>
                    </View>
                    {/**Char Properties*/}
                    {this.props.char["eigenschaften"][0]["eigenschaft"].map(propertie=>{
                        return <Text key={Math.random()}>{propertie["$"].name+": "+propertie["$"].value}</Text>
                    })}
            </View>
    }
}

export default connect((state) => ({}),)(CharBasics);
