import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./public.stack.routes";
import { useAuth } from "@/hooks/useAuth";
import { Load } from "@/components/Load";
import { PrivateRoutes } from "./private.stack.routes";

export const Routes = () => {
    const { isAuth, isLoading } = useAuth();

    if (isLoading) {
        return <Load />
    }

    return (
        <NavigationContainer>
            {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}