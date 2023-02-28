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
  // const formatTime = (input: Date) => {
  //   const date = new Date(input);
  //   const nowDate = new Date().getTime();
  //   const formatted = Math.floor((nowDate - date.getTime()) / 1000 / 60);
  //   return formatted;
  // };
  const formatTime = (input: Date) => {
    const date = new Date(input);
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diff < 60) {
      return `${diff} seconds ago`;
    } else if (diff < 60 * 60) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diff < 24 * 60 * 60) {
      const hours = Math.floor(diff / (60 * 60));
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(diff / (24 * 60 * 60));
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
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
