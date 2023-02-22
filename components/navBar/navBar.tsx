import {
  Burger,
  Button,
  LocalSwitcher,
  Notification,
  Notifications,
  useNotifications,
} from 'components';
import BurgerMenu from 'components/burgerMenu/burgerMenu';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { burgerMenu, notifications } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';
import useNavBar from './useNavBar';

const NavBar = () => {
  const {
    t,
    router,
    burgerMenuModal,
    selected,
    setSelected,
    dispatch,
    logoutHandler,
  } = useNavBar();
  const queryClient = useQueryClient();
  const { notificationsModal } = useSelector((store: RootState) => store.modal);
  const { notifications: usernotifications } = useNotifications();

  const notificationAmount = usernotifications?.data.filter(
    (notification: { is_read: number }) => notification.is_read !== 1
  ).length;

  return (
    <header className=' h-20 bg-[#24222F] flex sticky top-0 z-30'>
      {notificationsModal && <Notifications />}
      <div className='flex justify-between items-center m-auto max-w-[120rem] w-[93%]'>
        <h3
          className='lg:block hidden text-[#DDCCAA] uppercase cursor-pointer '
          onClick={() => router.replace('/news-feed')}
        >
          {t('movie_quotes')}
        </h3>
        <div className='lg:hidden block'>
          <div
            className=' cursor-pointer'
            onClick={() => {
              dispatch(burgerMenu());
            }}
          >
            <Burger />
          </div>
          {burgerMenuModal && <BurgerMenu />}
        </div>

        <div className='flex justify-center items-center lg:gap-10 gap-5 '>
          <div
            className='cursor-pointer relative'
            onClick={() => {
              dispatch(notifications());
              queryClient.invalidateQueries('notifications');
            }}
          >
            <Notification />
            {notificationAmount !== 0 ? (
              <h1 className='absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#E33812] text-center'>
                {notificationAmount}
              </h1>
            ) : (
              ''
            )}
          </div>
          <LocalSwitcher selected={selected} setSelected={setSelected} />
          <div className='hidden lg:block'>
            <Button
              item={t('log_out')}
              color='transparent'
              onClick={logoutHandler}
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
