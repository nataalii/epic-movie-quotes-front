import usePusher from 'hooks/usePusher';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { getNotifications, markAsRead } from 'services';

const useNotification = () => {
  const { t } = useTranslation('notifications');
  const { id: userId } = useSelector((store: any) => store.user);
  const echo = usePusher();
  const { data: notifications } = useQuery('notifications', getNotifications, {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  const formatTime = (input: Date) => {
    const date = new Date(input);
    const nowDate = new Date().getTime();
    const formatted = Math.floor((nowDate - date.getTime()) / 1000 / 60);
    return formatted;
  };
  const queryClient = useQueryClient();
  const onSubmit = async () => {
    await markAsRead();
    queryClient.invalidateQueries('notifications');
  };
  useEffect(() => {
    if (userId && echo) {
      window.Echo.private(`notifications.${userId}`).listen(
        'NotificationsEvent',
        () => {
          queryClient.invalidateQueries('notifications');
        }
      );
    }
  });
  return { formatTime, t, notifications, onSubmit };
};

export default useNotification;
