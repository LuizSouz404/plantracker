import { NavigationContainer } from "@react-navigation/native"
import { PublicRoutes } from "./public.stack.routes"

export const Routes = () => {
    return (
        <NavigationContainer>
            <PublicRoutes />
        </NavigationContainer>
    )
}