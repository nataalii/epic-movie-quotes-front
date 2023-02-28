import { Button } from 'components';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { LocalSwitcher } from 'components';
import { useDispatch } from 'react-redux';
import { openLoginModal, openRegisterModal } from 'stores/modalSlice';

const Header = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    router.locale === 'en' ? 'Eng' : 'ქართ'
  );
  const dispatch = useDispatch();
  const showRegisterModalHandler = () => {
    dispatch(openRegisterModal());
  };
  const showLoginModalHandler = () => {
    dispatch(openLoginModal());
  };
  const { t } = useTranslation('common');
  return (
    <header className=' w-[93%] m-auto font-helvetica md:sticky top-0 z-40'>
      <div className='flex justify-between items-center py-6 '>
        <h2 className='uppercase font-bold '>{t('movie_quotes')}</h2>
        <div className='flex justify-center items-center gap-4 '>
          <LocalSwitcher selected={selected} setSelected={setSelected} />
          <Button
            item={t('sign_up')}
            color='red'
            size='hidden '
            onClick={showRegisterModalHandler}
          />
          <Button
            item={t('log_in')}
            color='transparent'
            onClick={showLoginModalHandler}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
