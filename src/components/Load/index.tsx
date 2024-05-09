import LottieView from "lottie-react-native";
import { View } from "react-native";
import { styles } from "./styles";

import loadAnimation from '@/assets/load.json';

export function Load() {
    return (
        <View style={styles.container}>
            <LottieView 
                style={styles.animation}
                source={loadAnimation}
                autoPlay
                loop
            />
        </View>
    )
}