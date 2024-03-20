import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, SafeAreaView, Image, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Formik
import styles from './styles';
import { useSession, SessionProvider } from './session';
import fetchData from './serverQueries';

const MainScreen = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);
    const [loginTrial, setLoginTrial] = useState(false);
    const { user, setUser, isAuthenticated, setAuthenticated } = useSession();
    const [text, setText] = useState('Welcome to e_voting platform');

    useEffect(() => {
        if (isModalVisible && isAuthenticated) {
            setModalVisible(false);
            setUser({ Name: 'Oginga Alfred', Id: 'BSCIT/000/2021' })
            navigation.navigate('Voting Panel');
        } else if (isModalVisible) {
            if (loginTrial) {
                setText('Username and password mismatch !');
            }
            else {
                setModalVisible(true)
            }
        }
    }, [isModalVisible, isAuthenticated, user]);
    const logIn = async () => {
        if (isModalVisible) {
            try {
                const data = await fetchData('/appLogin', { name: 'Alfred', Id: '2562' });
                if (data.user) {
                    console.log(data.user)
                    setLoginTrial(true)
                    setAuthenticated(true)
                };
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        else {
            setModalVisible(!isModalVisible);
        }
    }
    const handleGoToHome = () => {
        if (isAuthenticated === true) {
            navigation.navigate('Voting Panel');
        }
        else {
            setModalVisible(true)
        }

    };

    const handleGoToAbout = () => {
        navigation.navigate('About');
    };

    const handleGoToSettings = () => {
        navigation.navigate('Settings');
    };

    const handleGoToShare = () => {
        navigation.navigate('Share');
    };

    return (
        <SafeAreaView>
            <View style={styles.navBar}>
                <Pressable onPress={handleGoToHome} ><Text style={{ color: 'white' }}>Panel</Text></Pressable>
                <Pressable onPress={handleGoToAbout} ><Text style={{ color: 'white' }}>About</Text></Pressable>
                <Pressable onPress={handleGoToShare} ><Text style={{ color: 'white' }}>Share</Text></Pressable>
                <Pressable onPress={handleGoToSettings} ><Text style={{ color: 'white' }}>Settings</Text></Pressable>
            </View>
            <View style={{ alignItems: 'center', gap: 20 }}>
                <Image style={styles.ballot} source={require('./../images/ballot.jpg')} />
                <Text>This app provides an online room for student voting</Text>
                <Text style={{ textAlign: 'center' }}>You are required to sign in to take place in institution election, voting in  your future leaders</Text>
            </View>
            <Modal
                visible={isModalVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={logIn}
            >
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%', justifyContent: 'center' }}>
                    <View style={styles.login}>
                        <Pressable onPress={() => { setModalVisible(false) }}><Text style={[styles.btn, { marginBottom: -13 }]}>X</Text></Pressable>
                        <Image style={styles.image} source={require('./../images/vote.png')}></Image>
                        <Text style={{ color: 'blue', textAlign: 'center' }}>{text}</Text>
                        <View style={styles.login_text}>
                            <Text>Username: </Text><TextInput style={styles.login_input} placeholder='Jumalfred' ></TextInput>
                        </View>
                        <View style={styles.login_text}>
                            <Text>Password: </Text><TextInput style={styles.login_input} secureTextEntry placeholder='12ab.?' ></TextInput>
                        </View>
                        <Pressable onPress={logIn}><Text style={styles.panel_2child}>LOGIN</Text></Pressable>
                        <Pressable><Text style={{ color: "green" }}>Forgot password</Text></Pressable>
                    </View>
                </View>
            </Modal>
            {isAuthenticated ? (<Pressable onPress={handleGoToHome} ><Text style={[styles.panel_2child, { marginTop: 30 }]}>Voting panel</Text></Pressable>) : (
                <Pressable onPress={logIn} ><Text style={[styles.panel_2child, { marginTop: 30 }]}>Log In</Text></Pressable>
            )}
        </SafeAreaView>
    );
};

export default MainScreen;
