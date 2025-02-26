import colors from "@/styles/colors";
import fonts from "@/styles/fonts";
import { Dimensions, Platform, StyleSheet } from "react-native";

const statusBarHeight = Platform.OS === 'android' ? 12 : 0;
const imageWidth = Dimensions.get('window').width * 0.7;

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: statusBarHeight,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 34,
        fontFamily: fonts.heading
    },
    image: {
        width: imageWidth
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        lineHeight: 22,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})