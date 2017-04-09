import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return <View style={styles.charContainer}>
                <ScrollView style={styles.scrollview}
                            automaticallyAdjustContentInsets={false}
                            horizontal={true}>
                    <View>
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
                    <View>
                        {/**Char Vor- und Nachteile*/}
                        {this.props.char["vt"][0]["vorteil"].map(advantage=>{
                            let value = ""
                            if("value" in advantage["$"]){value =": "+advantage["$"]["value"]}
                            return <Text key={Math.random()}>{advantage["$"].name+value}</Text>
                        })}
                        <View style={{height: 40}}>
                        </View>
                        {/**Char Sonderfertigkeiten*/}
                        {this.props.char["sf"][0]["sonderfertigkeit"].map(specialCraft=>{
                            let value = ""
                            if(Object.keys(specialCraft).length > 1){
                                value = ": "
                                Object.keys(specialCraft).map(key =>{
                                    if(key !== "$"){
                                        value += specialCraft[key].map(elem =>{
                                            if(elem["$"].name !== undefined){
                                                return elem["$"].name
                                            }else{
                                                console.log(elem)
                                            }
                                        }).join(", ")
                                    }
                                })
                            }
                            return <Text key={Math.random()}>{specialCraft["$"].name+value}</Text>
                        })}
                    </View>
                    <View>
                        <ScrollView>
                            {/**Char Vor- und Nachteile*/}
                            {this.props.char["talentliste"][0]["talent"].map(ability=>{
                                return <Text key={Math.random()}>
                                    {ability["$"].name+": "+ability["$"]["value"]+ability["$"]["probe"]}
                                </Text>
                            })}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
    }
}

const styles = StyleSheet.create({
    charContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
        alignSelf:"stretch",
    },
    scrollview:{
        flex:1,
    }
});

export default connect((state) => ({
        json: state.mobile.json,
    }),
)(App);
