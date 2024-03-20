import React, { useState } from 'react';
import styles from './styles';
import { Button, Pressable, Image, Text, View, Modal, ProgressBar } from 'react-native';

function results() {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.content}>
            <Pressable style={styles.box} onPress={() => { vote('0021') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center', marginBottom: 5 }}>Presidential</Text>
                <Button onPress={() => { setModalVisible(true) }} title='Results'></Button>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0022') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center', marginBottom: 5 }}>Deputy Presidential</Text>
                <Button onPress={() => { setModalVisible(true) }} title='Results' style={{ padding: 5 }}></Button>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0023') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center', marginBottom: 5 }}>Secretary General</Text>
                <Button onPress={() => { setModalVisible(true) }} title='Results'></Button>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0024') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center', marginBottom: 5 }}>Internal Affairs</Text>
                <Button onPress={() => { setModalVisible(true) }} title='Results'></Button>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0025') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center', marginBottom: 5 }}>Academic Secretary</Text>
                <Button onPress={() => { setModalVisible(true) }} title='Results'></Button>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0026') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center', marginBottom: 5 }}>Social and co-curriculum</Text>
                <Button onPress={() => { setModalVisible(true) }} title='Results'></Button>
            </Pressable>
            <Modal
                visible={isModalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%', justifyContent: 'center' }}>
                    <View style={[styles.login, { gap: 5, paddingBottom: 0 }]}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'seagreen', marginBottom: 25 }}>Presidential Contest</Text>
                        <Pressable style={styles.unbooked}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text >Oginga Alfred Juma</Text>
                            <ProgressBar valueNow='50' />
                        </Pressable>
                        <Pressable style={styles.unbooked}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text >Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable style={styles.unbooked}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text>Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable style={styles.unbooked}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text>Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable onPress={() => { setModalVisible(false) }} style={{ marginTop: 25, flex: 0.1 }}><Text style={[styles.postBtns, { backgroundColor: 'red', alignSelf: 'flex-start' }]}>Cancel</Text></Pressable>
                        <Pressable style={{ marginTop: -10, flex: 0.1 }}><Text style={[styles.postBtns, { backgroundColor: 'dodgerblue', alignSelf: 'flex-end' }]}>Submit</Text></Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default results;
