import { Burger, Button, LocalSwitcher, Notification } from 'components';
import BurgerMenu from 'components/burgerMenu/burgerMenu';
import { burgerMenu } from 'stores/modalSlice';
import useNavBar from './useNavBar';

const NavBar = () => {
  const { burgerMenuModal, selected, setSelected, dispatch, logoutHandler } =
    useNavBar();
  return (
    <header className=' h-20 bg-[#24222F] flex sticky top-0 z-30'>
      <div className='flex justify-between items-center m-auto max-w-[120rem] w-[93%]'>
        <h3 className='lg:block hidden text-[#DDCCAA] '>MOVIE QUOTES</h3>
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
          <Notification />
          <LocalSwitcher selected={selected} setSelected={setSelected} />
          <div className='hidden lg:block'>
            <Button
              item='Log out'
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
