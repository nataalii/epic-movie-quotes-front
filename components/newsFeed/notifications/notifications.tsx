/* eslint-disable @next/next/no-img-element */
import { Heart, Polygon, Quotes } from 'components/icons';
import { useNotifications } from '.';

const Notifications = () => {
  const { formatTime, t, notifications, onSubmit } = useNotifications();
  return (
    <div>
      <div className='absolute right-[5.8rem] md:right-32 lg:right-[19rem] 2xl:right-[20.5rem] top-16'>
        <Polygon />
      </div>
      <div className=' absolute lg:right-12 flex flex-col bg-black lg:w-[900px] mt-20 lg:max-h-[700px] overflow-auto  pb-12  w-screen h-screen rounded-xl'>
        <div className='flex justify-between items-center text-white px-6 pt-12'>
          <h1 className=' lg:text-[2rem] text-xl'>{t('notifications')}</h1>
          {notifications?.data.length === 0 ? (
            <h2 className='text-white'>{t('no_notifications_yet')}</h2>
          ) : (
            <h2 className='underline cursor-pointer' onClick={() => onSubmit()}>
              {t('mark_as_all_read')}
            </h2>
          )}
        </div>
        <div>
          {notifications?.data.map((notification: any) => {
            return (
              <div
                className='flex md:flex-row gap-2 flex-col justify-between md:items-center text-white mx-6 mt-6 px-4 py-2 border border-gray border-opacity-50 rounded-md'
                key={notification.id}
              >
                <div className='flex gap-6'>
                  <img
                    src={notification.from.thumbnail}
                    alt='avatar'
                    className={`w-16 h-16 rounded-full object-cover ${
                      !notification.is_read && ' border-[2px] border-green-500'
                    }`}
                  />
                  <div className='flex flex-col gap-2'>
                    <h2>{notification.from.name}</h2>
                    {notification.type === 'like' ? (
                      <div className='flex gap-2'>
                        <Heart />
                        <h3 className='text-sm lg:text-base'>
                          {t('reacted_to_your_quote')}
                        </h3>
                      </div>
                    ) : (
                      <div className='flex gap-2'>
                        <Quotes />
                        <h3 className='text-sm lg:text-base'>
                          {t('commented_to_your_movie_quote')}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className='lg:hidden pl-4 flex-row flex gap-10'>
                    {!notification.is_read && (
                      <h2 className='text-[#198754]'>{t('new')}</h2>
                    )}
                    <h2>
                      {formatTime(notification.created_at)}
                      {t('minutes_ago')}
                    </h2>
                  </div>
                  <div className='hidden lg:flex flex-col gap-6'>
                    <h2>
                      {formatTime(notification.created_at)} {t('minutes_ago')}
                    </h2>
                    {!notification.is_read && (
                      <h2 className='text-[#198754] pl-10'>{t('new')}</h2>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
