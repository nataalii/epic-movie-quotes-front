import { Button } from 'components';
import useTranslation from 'next-translate/useTranslation';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import { LocalSwitcher } from 'components';

const Header = ({
  setShowRegisterModal,
  setShowLoginModal,
}: {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
  setShowLoginModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    router.locale === 'en' ? 'Eng' : 'ქართ'
  );

  const { t } = useTranslation('common');
  return (
    <header className=' w-5/6 m-auto font-helvetica md:sticky top-0 z-40'>
      <div className='flex justify-between items-center py-6 '>
        <h2 className='uppercase font-bold '>{t('movie_quotes')}</h2>
        <div className='flex justify-center items-center gap-4 '>
          <LocalSwitcher selected={selected} setSelected={setSelected} />
          <Button
            item={t('sign_up')}
            color='red'
            size='hidden '
            onClick={() => setShowRegisterModal(true)}
          />
          <Button
            item={t('log_in')}
            color='transparent'
            onClick={() => setShowLoginModal(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
