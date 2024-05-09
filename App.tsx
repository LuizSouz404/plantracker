import 'react-native-gesture-handler';

import { 
  Jost_400Regular, 
  Jost_600SemiBold, 
  useFonts 
} from '@expo-google-fonts/jost';

import { Load } from '@/components/Load';
import { Routes } from '@/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) 
    return <Load />;
  

  return (
    <Routes />
  );
}
