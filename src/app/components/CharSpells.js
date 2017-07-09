import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class CharSpells extends Component {
    render() {
        if(this.props.zauberliste[0]==="") return null
        return <View>
            <ScrollView>
                {/**Char Zauber*/}
                {this.props.zauberliste[0]["zauber"].map(spell=>{
                    return <Text key={Math.random()} numberOfLines={5}>
                        {
                            spell["$"].name+": "+spell["$"]["value"]+" ZfP"+spell["$"]["probe"]+"\n"+
                            "RW:"+spell["$"].reichweite+" WD:"+spell["$"].wirkungsdauer+" ZD:"+spell["$"].zauberdauer+"\n"+
                            "Kosten: "+spell["$"].kosten+"\n"+
                            spell["$"].anmerkungen+spell["$"].zauberkommentar+"\n"+
                            "\n"
                        }
                    </Text>
                })}
            </ScrollView>
        </View>
    }
}

export default connect((state) => ({}),)(CharSpells);
