import React from 'react';
import { View, Text } from 'react-native';

function SettingsScreen(props) {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ marginBottom: 8 }}>Settings page not updated.</Text>
            <Text>This will help you to customise your app interface and even to modify/set automatic system log out.</Text>
        </View>
    );
}
function AboutScreen(props) {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold', marginVertical: 15, color: 'seagreen' }}>About the System</Text>
            <Text style={{ marginBottom: 8 }}>The app have been developed to enable students to vote online and therefore reducing the number of physical voters that normally cause congestion on voting line.</Text>
            <Text>It also enables the admin to initiate and control the voting process within the institution.</Text>
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold', marginVertical: 15, color: 'seagreen' }}>THE DEVELOPERS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, borderBottomWidth: 2, borderBottomColor: 'seagreen', marginBottom: 15 }}>
                    <Text style={{ fontWeight: 600 }}>Name</Text>
                    <Text style={{ fontWeight: 600 }}>Registration No.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ marginBottom: 8 }}>1. Sangoro Omondi Isaac</Text>
                    <Text style={{ marginBottom: 8 }}>BCSIT/0283/2021</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ marginBottom: 8 }}>2. Oginga Alfred Juma</Text>
                    <Text style={{ marginBottom: 8 }}>BCSIT/0287/2021</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ marginBottom: 8 }}>3. Fredrick Femar Ochieng</Text>
                    <Text style={{ marginBottom: 8 }}>BCSIT/0214/2019</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ marginBottom: 8 }}>4. Owen Okoth</Text>
                    <Text style={{ marginBottom: 8 }}>BCSIT/0305/2021</Text>
                </View>
            </View>
        </View>
    );
}
function ShareScreen(props) {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ marginBottom: 8 }}> The share interface is yet to be published.</Text>
            <Text> This will enable you to share this app with your friends.</Text>
        </View>
    );
}

export { SettingsScreen, ShareScreen, AboutScreen };