import { Button, BackgroundImage, Footer, Header } from 'components';
import RegisterFormModal from '../components/modals/register/registerForm/registerModal';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <div className='bg-[#11101A] text-[#DDCCAA] font-helvetica '>
        <Header />
        <div className='flex justify-center items-center gap-6 flex-col h-[42rem]  '>
          <h1 className='lg:max-w-[42rem] max-w-[20rem] w-[80%] text-2xl lg:text-[3.7rem] text-center font-semibold leading-normal whitespace-pre-wrap'>
            {t('welcome_text')}
          </h1>
          <Button item={t('get_started')} color='red' size='lg:text-2xl' />
        </div>
        <BackgroundImage
          img='bg-interstellar bg-linear-top-left  '
          quote={t('interstellar_quote')}
          movieName={t('interstellar_title')}
        />

        <BackgroundImage
          img='bg-tenebaums lg:bg-fixed'
          quote={t('tenenbaums_quote')}
          movieName={t('tenenbaums_title')}
        />
        <BackgroundImage
          img='bg-lord-of-rings  lg:bg-fixed'
          quote={t('lotr_quote')}
          movieName={t('lotr_title')}
        />
        <Footer />

        <RegisterFormModal />
      </div>
    </Fragment>
  );
}
