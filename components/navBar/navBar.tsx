import { Button, LocalSwitcher, Notification } from 'components';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { fetchCSRFToken, logout } from 'services';

const NavBar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    router.locale === 'en' ? 'Eng' : 'ქართ'
  );
  const logoutHandler = async () => {
    try {
      await fetchCSRFToken();
      await logout();
      deleteCookie('XSRF-TOKEN');
      router.push('/');
    } catch (error) {}
  };
  return (
    <header className=' h-20 bg-[#24222F] flex sticky top-0'>
      <div className='flex justify-between items-center m-auto max-w-[120rem] w-[93%]'>
        <h3 className=' text-[#DDCCAA] '>MOVIE QUOTES</h3>
        <div className='flex justify-center items-center gap-10 '>
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
