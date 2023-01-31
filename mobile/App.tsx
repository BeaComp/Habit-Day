import './src/lib/dayjs';
import { Button, StatusBar } from 'react-native';
import {
  useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import * as Notifications from 'expo-notifications'



// async function getScheduleNotification() {
//   const schedules = await Notifications.getAllScheduledNotificationsAsync()
// } isso aparece as notificacoes agendedadas

Notifications.setNotificationHandler({

  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false

  })
})




export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  //agendou uma notif para daqui um minuto

  async function scheduleNotification() {
      const trigger = new Date(Date.now())
      trigger.setMinutes(trigger.getMinutes() + 1)

      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Olá, Beatriz',
          body: 'Você praticou seus hábitos hoje?'

        },

        trigger
      })
  }



  //carrega as fontes antes
  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}
