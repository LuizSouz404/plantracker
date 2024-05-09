import { Button } from "@/components/Button";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/core";

interface RouteParams {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    smile: '😄',
    hug: '🤗',
}


export function Confirmation() {
    const route = useRoute();
    const navigator = useNavigation();
    
    const {
        title,
        buttonTitle,
        icon,
        subtitle,
        nextScreen
    } = route.params as RouteParams;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <Button onPress={() => navigator.navigate(nextScreen)}>
                        <Text style={styles.buttonText}>
                            {buttonTitle}
                        </Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}