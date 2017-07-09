import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class CharAdvantagesDiasadvantagesSpecialAbilities extends Component {
    render() {
        let advantages = this.props.char["vt"][0]["vorteil"]
        let specialCrafts = this.props.char["sf"][0]["sonderfertigkeit"]
        return <View>
            <ScrollView>
                {/**Char Vor- und Nachteile*/}
                {advantages.map(advantage=>{
                    let value = ""
                    if("value" in advantage["$"]){value =": "+advantage["$"]["value"]}
                    return <Text key={Math.random()}>{advantage["$"].name+value}</Text>
                })}
                <View style={{height: 40}}>
                </View>
                {/**Char Sonderfertigkeiten*/}
                {specialCrafts.map(specialCraft=>{
                    let value = ""
                    if(Object.keys(specialCraft).length > 1){
                        value = ": \n"
                        Object.keys(specialCraft).map(key =>{
                            if(key !== "$"){
                                value += specialCraft[key].map(elem =>{
                                    if("wahl" in elem){
                                        return elem["wahl"][0]["$"]["value"]+" "+
                                            elem["wahl"][1]["$"]["value"]+"("+
                                            elem["wahl"][2]["$"]["value"]+")"+"\n"
                                    }else{
                                        return elem["$"].name
                                    }
                                }).join(", ")
                            }
                        })
                    }
                    return <Text key={Math.random()}>{specialCraft["$"].name+value}</Text>
                })}
            </ScrollView>
        </View>
    }
}

export default connect((state) => ({}),)(CharAdvantagesDiasadvantagesSpecialAbilities);
