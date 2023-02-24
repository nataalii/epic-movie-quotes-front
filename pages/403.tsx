import { Button, Gendolf, Union } from 'components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
export default function Forbidden() {
  <Head>
    <title>Forbidden</title>
    <meta property='og:title' content='My page title' key='title' />
  </Head>;
  const router = useRouter();
  const { t } = useTranslation('errors');
  return (
    <Fragment>
      <div className='h-screen w-screen flex flex-col items-center pt-40 gap-12  text-center'>
        <div className=' relative'>
          <div className='absolute ml-[0.8rem]'>
            <Gendolf />
          </div>
          <div className=' mt-14'>
            <Union />
          </div>
        </div>
        <h1 className='text-2xl font-semibold text-white lg:text-5xl'>
          {t('you_shall_not_pass')}
        </h1>
        <h2 className='text-base lg:text-2xl font-semibold text-white  w-[85%] max-w-[700px]'>
          {t('permission_denied')}
        </h2>
        <Button
          item={t('return_home')}
          color='red'
          onClick={() => {
            router.push('/');
          }}
        />
      </div>
    </Fragment>
  );
}
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['errors'])),
    },
  };
}
