import PushNotification from 'react-native-push-notification';

const createChannels = () => {
  PushNotification.createChannel(
    {
      channelId: 'Phurti',
      channelName: 'Phurtii',
    },
    () => {
      // Channel created callback (optional)
      console.log('Channel created');
    }
  );
};

const handleScheduleNotification = (title: string, message: string) => {
  console.log("Clicked")
  PushNotification.localNotificationSchedule({
    channelId: 'Phurti',
    // title: title,
    message: message,
    bigText: title, // You can use the same value for bigText as the title if needed.
    date: new Date(Date.now() + 5 * 1000)
  });
};

export { handleScheduleNotification, createChannels };
