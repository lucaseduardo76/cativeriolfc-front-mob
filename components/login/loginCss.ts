
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#1D1B20"
    },
    logo: {
        backgroundColor: "#D9D9D9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        width: 220,
        alignSelf: "center",
        borderRadius: 50,
    },
    titleContainer: {
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 18
    },
    title:{
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 21,
        color: "#fff"
    },
    inputContainer:{
        marginTop:10,
        marginBottom: 25
    },
    label:{
        color: "#fff",
        fontSize: 14
    },
    inputLogin: {
        backgroundColor: "#322F35",
        height: 40,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical:5,
        borderRadius: 5
    }


})