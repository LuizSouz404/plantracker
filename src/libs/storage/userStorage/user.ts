import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetUser, SaveUser, User } from './types';

const getUserStorage: GetUser = async () => {
    const user = await AsyncStorage.getItem('@plantracker:user');

    if (!user) {
        return {};
    }

    return JSON.parse(user);
}

const saveUserStorage: SaveUser = async (user: User) => {
    await AsyncStorage.setItem('@plantracker:user', JSON.stringify(user));
}

export {
    getUserStorage,
    saveUserStorage
}