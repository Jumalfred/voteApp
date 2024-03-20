import React from 'react';
import { Image, Text, Pressable, View, Alert } from 'react-native';
import styles from './styles';
import { useSession } from './session';

function Profile() {
    const { user } = useSession()
    return (
        <View style={styles.profile}>
            <Image style={styles.profileImg} source={require('../images/avatar.png')} />
            <View style={styles.login_text}>
                <Text>Name : </Text>
                <Text style={[styles.login_input, { borderWidth: 0 }]}>{user.Name}</Text>
            </View>
            <View style={styles.login_text}>
                <Text>Id No. : </Text>
                <Text style={[styles.login_input, { borderWidth: 0 }]}>{user.Id}</Text>
            </View>
            <View style={styles.login_text}>
                <Text>Level : </Text>
                <Text style={[styles.login_input, { borderWidth: 0 }]}>Third Year</Text>
            </View>
            <Pressable onPress={() => { prompt("Please enter your current password...") }}><Text style={{ color: 'green', marginTop: 10 }}>Change password</Text></Pressable>
        </View >
    );
}

export default Profile;