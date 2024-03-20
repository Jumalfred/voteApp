import React from 'react';
import { View, Text } from 'react-native';

function progress(props) {
    return (
        <View style={{ marginTop: 30, width: '80%', backgroundColor: 'white', padding: 20, alignSelf: 'center' }}>
            <Text style={{ fontWeight: '600', color: 'seagreen' }}>Voting Process</Text>
            <View>
                <Text>Voter turnout : 20</Text>
                <Text>Online Voers:   12</Text>
                <Text>Physical Voters: 8</Text>
            </View>
        </View>
    );
}

export default progress;