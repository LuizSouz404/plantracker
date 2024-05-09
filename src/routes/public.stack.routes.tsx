import { Confirmation } from "@/pages/Confirmation";
import { UserIdentification } from "@/pages/UserIdentification";
import { Welcome } from "@/pages/Welcome";
import colors from "@/styles/colors";
import { createStackNavigator } from "@react-navigation/stack";

const StackRouters = createStackNavigator();

export const PublicRoutes = () => (
    <StackRouters.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <StackRouters.Screen 
            name="Welcome"
            component={Welcome}
        />
        <StackRouters.Screen 
            name="UserIdentification"
            component={UserIdentification}
        />
        <StackRouters.Screen 
            name="Confirmation"
            component={Confirmation}
        />
    </StackRouters.Navigator>
)