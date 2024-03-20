
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'seagreen',
        color: '#fff'
    },
    profile: {
        width: '80%',
        height: "auto",
        alignSelf: 'center',
        marginTop: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        gap: 20,
        paddingHorizontal: 16,
        paddingVertical: 36
    },
    profileImg: {
        width: 150,
        height: 150,
        borderRadius: 10,
        margin: 'auto',
        marginBottom: 20
    },
    unbooked: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: -10,
    },
    booked: {
        backgroundColor: 'seagreen',
        flexDirection: 'row',
        paddingHorizontal: 10,
        color: 'white',
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: -10
    },
    contesterImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    profileBar: {
        width: '90%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginBottom: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    postBtns: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        borderRadius: 5
    },
    links: {
        color: 'white',
        paddingBottom: 3,
        marginBottom: 20,
        paddingBottom: 5,
        borderBottomColor: 'seagreen',
        borderBottomWidth: 1
    },
    image: {
        width: 110,
        height: 110,
        marginBottom: 5,
        alignSelf: 'center',
        borderRadius: 55
    },
    prof: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    post: {
        width: 70,
        height: 70,
        marginBottom: 20,
        borderRadius: 35,
        objectFit: 'cover'
    },
    content: {
        width: '97%',
        height: '92.2%',
        backgroundColor: 'transparent',
        margin: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        padding: 20
    },
    box: {
        width: '46%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderRadius: 7
    },
    sect: {
        width: '100%',
        height: '100%',
        marginTop: 105,
        backgroundColor: 'rgba(10, 105, 102, 0.8)',
    },
    modal: {
        width: '70%',
        height: 475,
        paddingLeft: 10,
        borderBottomRightRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    ballot: {
        width: '90%',
        height: 200,
        borderRadius: 15,
        marginTop: 80,
    },
    login: {
        width: '80%',
        height: "auto",
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        gap: 20,
        padding: 16,
        paddingBottom: 40
    },
    login_text: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    login_input: {
        color: 'green',
        width: '65%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        // outline: 'none'
    },
    panel: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 2
    },
    navBar: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'seagreen',
        position: 'sticky',
        textAlign: 'center',
        zIndex: 2
    },
    panel_2child: {
        zIndex: 3,
        margin: 9,
        padding: 6,
        color: 'white',
        borderRadius: 5,
        backgroundColor: 'dodgerblue',
        textAlign: 'center'
    },
    bar: {
        width: 30,
        height: 30,
        margin: 9,
        justifyContent: 'space-evenly'
    },
    bar_children: {
        width: 30,
        height: 3,
        backgroundColor: '#000'
    },
    btn: {
        fontSize: 20,
        color: 'red',
        marginRight: 10,
        marginBottom: 10,
        alignSelf: 'flex-end'
    }
})


export default styles;