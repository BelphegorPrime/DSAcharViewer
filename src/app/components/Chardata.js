import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';

import CharBasics from './CharBasics'
import CharAdvantagesDiasadvantagesSpecialAbilities from './CharAdvantagesDiasadvantagesSpecialAbilities'
import CharAbilities from './CharAbilities'
import CharSpells from './CharSpells'

class CharData extends Component {
    render() {
        return <View style={styles.charContainer}>
                <ScrollView style={styles.scrollview}
                            automaticallyAdjustContentInsets={false}
                            horizontal={true}>
                    <CharBasics char={this.props.char} />
                    <CharAdvantagesDiasadvantagesSpecialAbilities char={this.props.char} />
                    <CharAbilities abilities={this.props.char["talentliste"][0]["talent"]} />
                    <CharSpells zauberliste={this.props.char["zauberliste"]} />
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
)(CharData);
