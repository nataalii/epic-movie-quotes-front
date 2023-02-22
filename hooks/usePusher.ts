import { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import instance from 'services/axios';
declare global {
  interface Window {
    Echo: any;
    pusher: any;
  }
}
const usePusher = () => {
  const [echo, setEcho] = useState();
  useEffect(() => {
    const Pusher = require('pusher-js');
    window.pusher = Pusher;
    if (!window.Echo) {
      window.Echo = new Echo({
        broadcaster: 'pusher',
        key: '5d517eab955462fafb08',
        cluster: 'ap2',
        forceTLS: true,
        encrypted: true,
        enabledTransports: ['ws', 'wss'],
        authorizer: (channel: { name: string }) => {
          return {
            authorize: (socketId: number, callback: Function) => {
              instance
                .post('/api/broadcasting/auth', {
                  socket_id: socketId,
                  channel_name: channel.name,
                })
                .then((response) => {
                  callback(null, response.data);
                })
                .catch((error) => {
                  callback(error);
                });
            },
          };
        },
      });
      setEcho(window.Echo);
    }
  }, []);
  return echo;
};

export default usePusher;
