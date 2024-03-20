import React, { useState, useEffect } from 'react';
import { Modal, Pressable, Image, Text, SafeAreaView, View } from 'react-native';
import Profile from './profile';
import Progress from './progress';
import styles from './styles';
import Results from './results';
import Dashboard from './dashboard';
import fetchData from './serverQueries';
import { useSession } from './session';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
    const navigator = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [showDashboard, setShowDashboard] = useState(true);
    const { user, setUser, isAuthenticated, setAuthenticated } = useSession();

    // useEffect(async () => {
    //     const data = await fetchData('/user', { name: 'u' });
    //     setUser(data);
    // }, [user])

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const logOut = async () => {
        try {
            // await fetchData('/appLogOut', {})
            setAuthenticated(false)
            navigator.navigate('Home');
        }
        catch (err) { throw err }
    }

    const showComponent = (componentName) => {
        setShowProfile(componentName === 'profile');
        setShowDashboard(componentName === 'dashboard');
        setShowResults(componentName === 'results');
        setShowProgress(componentName === 'progress');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.panel}>
                <Pressable style={styles.bar} onPress={toggleModal}>
                    <View style={styles.bar_children}></View>
                    <View style={styles.bar_children}></View>
                    <View style={styles.bar_children}></View>
                </Pressable>
                <Pressable onPress={logOut}><Text style={styles.panel_2child}>Sign out</Text></Pressable>
            </View>
            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.sect}>
                    <View style={styles.modal}>
                        <Pressable onPress={toggleModal}><Text style={styles.btn}>X</Text></Pressable>
                        <View style={styles.profileBar}>
                            <Image style={styles.prof} source={require('./../images/avatar.png')} />
                            <View>
                                <Text style={{ marginBottom: 6, color: 'white' }}>{user.Name}</Text>
                                <Text style={{ color: 'white' }}>{user.Id}</Text>
                            </View>
                        </View>
                        <Pressable onPress={() => { showComponent('dashboard'), toggleModal() }}><Text style={styles.links}>Dashboard</Text></Pressable>
                        <Pressable onPress={() => { showComponent('profile'), toggleModal() }}><Text style={styles.links}>My Profile</Text></Pressable>
                        <Pressable onPress={() => { showComponent('progress'), toggleModal() }}><Text style={styles.links}>Voting process</Text></Pressable>
                        <Pressable onPress={() => { showComponent('results'), toggleModal() }}><Text style={styles.links}>Election results</Text></Pressable>
                        <Pressable onPress={() => { alert('Page not set'), toggleModal() }}><Text style={styles.links}>Help</Text></Pressable>
                        <Text style={{ color: 'white', bottom: 0, position: 'absolute', textAlign: 'center', marginBottom: 16, width: '100%' }}>Version : 00.00.0001 </Text>
                    </View>
                </View>
            </Modal>
            {showProfile && <Profile />}
            {showDashboard && <Dashboard />}
            {showResults && <Results />}
            {showProgress && <Progress />}
        </SafeAreaView>
    );
}
