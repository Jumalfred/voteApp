import React, { useState } from 'react';
import styles from './styles';
import { View, Pressable, Image, Text, Modal } from 'react-native';

function Dashboard(props) {

    const [modal1Visible, setModal1Visible] = useState(false);
    const [bookedElement, setBookedElement] = useState(null);

    const vote = (id) => {
        setModal1Visible(!modal1Visible)
    }

    return (
        <View style={styles.content}>
            <Pressable style={styles.box} onPress={() => { vote('0021') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center' }}>Presidential</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0022') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text>Deputy Presidential</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0023') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center' }}>Secretary General</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0024') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center' }}>Internal Affairs</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0025') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center' }}>Academic Secretary</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => { vote('0026') }}>
                <Image style={styles.post} source={require('./../images/avatar.png')} />
                <Text style={{ textAlign: 'center' }}>Social and co-curriculum</Text>
            </Pressable>
            <Modal
                visible={modal1Visible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModal1Visible(false)}
            >
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%', justifyContent: 'center' }}>
                    <View style={[styles.login, { gap: 5, paddingBottom: 0 }]}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'seagreen', marginBottom: 25 }}>Presidential Contest</Text>
                        <Pressable style={bookedElement === '2562' ? styles.booked : styles.unbooked} onPress={() => { setBookedElement('2562') }}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text style={bookedElement === '2562' ? { color: 'white' } : { color: 'black' }}>Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable style={bookedElement === '2563' ? styles.booked : styles.unbooked} onPress={() => { setBookedElement('2563') }}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text style={bookedElement === '2563' ? { color: 'white' } : { color: 'black' }}>Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable style={bookedElement === '2564' ? styles.booked : styles.unbooked} onPress={() => { setBookedElement('2564') }}>
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text style={bookedElement === '2564' ? { color: 'white' } : { color: 'black' }}>Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable style={bookedElement === '2565' ? styles.booked : styles.unbooked} onPress={() => { setBookedElement('2565') }} >
                            <Image style={styles.contesterImage} source={require('../images/avatar.png')} />
                            <Text style={bookedElement === '2565' ? { color: 'white' } : { color: 'black' }}>Oginga Alfred Juma</Text>
                        </Pressable>
                        <Pressable onPress={() => { setModal1Visible(false), setBookedElement(false) }} style={{ marginTop: 25, flex: 0.1 }}><Text style={[styles.postBtns, { backgroundColor: 'red', alignSelf: 'flex-start' }]}>Cancel</Text></Pressable>
                        <Pressable onPress={() => { alert('You vote has been submited succesfully'), setModal1Visible(false) }} style={{ marginTop: -10, flex: 0.1 }}><Text style={[styles.postBtns, { backgroundColor: 'dodgerblue', alignSelf: 'flex-end' }]}>Submit</Text></Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Dashboard;