import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class CharBasics extends Component {
    render() {
        return <View>
            <ScrollView>
                {/**Char Talente*/}
                {this.props.abilities.map(ability=>{
                    return <Text key={Math.random()}>
                        {ability["$"].name+": "+ability["$"]["value"]+ability["$"]["probe"]}
                    </Text>
                })}
            </ScrollView>
        </View>
    }
}

export default connect((state) => ({}),)(CharBasics);
